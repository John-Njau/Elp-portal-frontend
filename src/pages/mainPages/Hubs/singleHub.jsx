import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import MainLayoutAuth from '../../../layouts/MainLayoutAuth'
import './singleHub.scss';
import hubsbanner from '../../../assets/images/hubsbanner1.jpg';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import EventsCard from '../../../components/cards/EventsCard';
import Events_Card from '../../../components/cards/Events_Cards';

function SingleHub() {

    const [hub, setHub] = useState({});
    const location = useLocation();
    const navigate = useNavigate();


    const axiosInstance = useAxiosPrivate();
    const [eventsData, setEventsData] = useState([])

    useEffect(() => {
        fetchEventsList();
        if (location.state) {
            const hub = location.state.data;
            setHub(hub);
        } else {
            // navigate to hubs page
            navigate('/hubs');
        }

    }, [])

    async function fetchEventsList() {
        try {
            //const fetchEventsResponses = await axiosInstance.get(`/api/events/`);
            const {data: fetchEventsResponses, status} = await axiosInstance.get(`/api/events/`);
            console.log("fetchEventsResponses", fetchEventsResponses)
            let eventsResponses = fetchEventsResponses

            let data = [];
            let propertyArray = [];
            let x = 1;


            eventsResponses.forEach((eventsResponse) => {
                let {
                    event_organizer_chapter,
                    charges,
                    date,
                    description,
                    event_organizer_hub,
                    id,
                    name,
                    event_creator,
                    event_organizer_name,
                    poster,
                    time,
                    venue,

                } = eventsResponse;


                const datas = {
                    _id: x,
                    event_organizer_chapter,
                    charges,
                    date,
                    description,
                    event_organizer_hub,
                    id,
                    name,
                    event_creator,
                    event_organizer_name,
                    poster,
                    time,
                    venue,

                };

                data.push(datas);
                x = x + 1;
            });


            if (status === 200) {
                //setPropertiesData(propertydatas);
                console.log("data", data)
                setEventsData(data);

            } else {
                //errorNotification("Unable to fetch Partners");
            }
        } catch (ex) {
            //errorNotification("Unable to fetch Partners--");
            console.log({ex});
        }
    }

    const thisHubEvents = eventsData.filter(
        (event) => event.event_organizer_hub === hub.id
    );

    const thisChapterEvents = eventsData.filter(
        (event) => event.event_organizer_chapter === hub.id
    );

    const EventdataToUse = thisHubEvents.length > 0 ? thisHubEvents : (thisChapterEvents.length > 0 ? thisChapterEvents : eventsData);


    const currentDate = new Date();

    const upcomingEvents = EventdataToUse.filter(
      (event) => new Date(event.date) >= currentDate
    );
  
    const pastEvents = EventdataToUse.filter(
      (event) => new Date(event.date) < currentDate
    );
  
    const currentEvents = EventdataToUse.filter(
      (event) =>
        new Date(event.date) >= currentDate &&
        new Date(event.date) < new Date(currentDate.getTime() + 86400000)
    );

    return (
        <div className='single-hub'>
            <section className="hub-intro">
                <h2 className="hub-title">{hub.name}</h2>
                <div className="hub-image-container">
                    <div className="image-container"><img className='hub-image'
                                                          src={hub.hub_profile_image ? `https://res.cloudinary.com/dybhuw7aw/${hub.hub_profile_image}` : (hub.chapter_profile_image ? `https://res.cloudinary.com/dybhuw7aw/${hub.chapter_profile_image}` : (hub.poster? `https://res.cloudinary.com/dybhuw7aw/${hub.poster}`: (hub.date? "https://www.crucial.com.au/blog/wp-content/uploads/2014/12/events_medium.jpg" : `${hubsbanner}`)
                                                          ))}
                                                          alt={` ${hub.name} banner`}/></div>

                </div>

            </section>
            <section className="hub-info">
                <p className='about-title'>ABOUT</p>
                <p className="hub-about">{hub.description}</p>
            </section>
           { hub.poster === undefined && <>
               <section className="hub-upcoming-events">
                    <p className='about-title'>Upcoming Events</p>
                    {upcomingEvents.length > 0 ?  <>
                    <div className="hub-events"> {upcomingEvents &&
                        upcomingEvents.map((event, index) => {
                            return <EventsCard
                            className="event-card"
                            id={event.id}
                            event_name={event.name}
                            date={event.date}
                            time={event.time}
                            venue={event.venue}
                            description={event.description}
                            poster={event.poster}
                            organizer={event.event_organizer_name}
                            data={event}
                            />
                        })}</div></> : <p className="no-events">Coming Soon...</p>}
                </section>
                <section className="hub-upcoming-events">
                    <p className='about-title'>Recent Events</p>
                   {pastEvents.length > 0 ? <div className="hub-events"> {pastEvents &&
                        pastEvents.map((event, index) => {
                            return <EventsCard
                            className="event-card"
                            id={event.id}
                            event_name={event.name}
                            date={event.date}
                            time={event.time}
                            venue={event.venue}
                            description={event.description}
                            poster={event.poster}
                            organizer={event.event_organizer_name}
                            data={event}
                            />;
                        })}</div> : <p className="no-events">We just got started. All our amazing events are in the future.</p>}
                </section>
           </>}

        </div>
    )
}

export default MainLayoutAuth(SingleHub);