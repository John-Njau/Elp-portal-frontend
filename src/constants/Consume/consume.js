import React, { useEffect, useState } from "react";
import axios from "axios";

function ConsumeApi() {
  const [AppState, setEvents] = useState({
    loading: false,
    events: [],
  });

  useEffect(() => {
    setEvents({ loading: true });
    // const apiUrl = `http://127.0.0.1:8000/api/events/`; --> LOCALLY
    const apiUrl = `https://elp-portal.herokuapp.com/api/events/`; // --> ON HEROKU

    axios.get(apiUrl).then((events) => {
      const allEvents = events.data;
      setEvents({ loading: false, events: allEvents });
      console.log(allEvents);
    });
  }, [setEvents]);
  return (
    <>
      <div>
        <h1>Consume Api</h1>
        <center>All Events</center>
        <div className="card" events={AppState.events}  >
          {AppState.events?.map((event) => {
            
              return (
                <div className="card-body" key={event.id}>
                  <h5 className="card-title">{event.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {event.description}
                  </h6>
                  <p className="card-text">{event.date}</p>
                  <p className="card-text">{event.time}</p>
                  <p className="card-text">{event.venue}</p>
                  <hr></hr>
                </div>
                
              );
            
          })}
        </div>
       
      </div>
    </>
  );
}

export default ConsumeApi;
