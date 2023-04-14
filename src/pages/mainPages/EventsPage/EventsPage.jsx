import React, { useEffect, useState } from "react";
import MainLayoutAuth from "../../../layouts/MainLayoutAuth";

import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { axiosPublic } from "../../../lib/axios/axios";

import EventsCard from "../../../components/cards/EventsCard";
import "./EventsPage.scss";

function EventsPage() {
  const axiosInstance = useAxiosPrivate();
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    axiosPublic
      .get("api/events/")
      .then((response) =>
        // console.log("events response", response.data)
        setEventsData(response.data)
      )
      .catch((error) => console.log(error));
  }, []);

  const currentDate = new Date();

  const upcomingEvents = eventsData.filter(
    (event) => new Date(event.date) >= currentDate
  );

  const pastEvents = eventsData.filter(
    (event) => new Date(event.date) < currentDate
  );

  const currentEvents = eventsData.filter(
    (event) =>
      new Date(event.date) >= currentDate &&
      new Date(event.date) < new Date(currentDate.getTime() + 86400000)
  );

  return (
    <div className="eventsPage">
      <h2>Events</h2>
      <h4>Current events</h4>
      <hr />
      <div className="events-cards-container">
        {currentEvents &&
          currentEvents.map((event, key) => (
            <EventsCard
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
          ))}
      </div>
      <h4>Upcoming events</h4>
      <hr />
      <div className="events-cards-container">
        {upcomingEvents &&
          upcomingEvents.map((event, key) => (
            <EventsCard
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
          ))}
      </div>

      <h4>Past events</h4>
      <hr />
      <div className="events-cards-container">
        {pastEvents &&
          pastEvents.map((event, key) => (
            <EventsCard
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
          ))}
      </div>

      {/* <div className="events-cards-container">
        {eventsData &&
          eventsData.map((event, key) => (
            <EventsCard
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
          ))}
      </div> */}
    </div>
  );
}

export default MainLayoutAuth(EventsPage);
