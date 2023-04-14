import React from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { axiosPublic } from "../../lib/axios/axios";
import { useState } from "react";

const EventsCard = ({
  id,
  event_name,
  date,
  time,
  venue,
  description,
  poster,
  organizer,
  data,
}) => {
  const refresh = localStorage.getItem("refresh");
  const decode = jwt_decode(refresh);

  const user = decode.user_id;
  const event = id;
  const payload = { event, user };
  const navigate = useNavigate();
  const [isUserMember, setIsUserMember] = useState(false);

  const checkIfMember = async (dataToCheck) => {
    const res = await axiosPublic
      .get("api/events/attendees/")
      .then((res) => {
        console.log("check if user is a member of the chapter: ", res);
        const data = res.data.results;
        console.log("data", data);
        const { event, user } = dataToCheck;
        const targetUser = user;
        const targetEvent = event;
        let pairFound = false;

        for (const result of data) {
          if (result.user === targetUser && result.event === targetEvent) {
            pairFound = true;
            setIsUserMember(true);
            console.log("pair found", pairFound);
            alert("You are already a member of this chapter");
            break;
          } else {
            pairFound = false;
            setIsUserMember(false);
            registerUser(dataToCheck);
          }
        }

        return pairFound;
      })
      .catch((error) => {
        console.log("check if user is a member of the chapter error: ", error);
      });
  };

  const registerUser = async (data) => {
    try {
      const res = await axiosPublic.post("api/events/attendees/", data);
      console.log("Register user to Event: ", res);
    } catch (error) {
      console.log("Register user to event error: ", error);
    }
  };

  const handleMore = () => {
    navigate(`/${event_name}${id}`, { state: { data } });
  };
  const handleJoin = async (e) => {
    e.preventDefault();
    console.log("dada", payload);
    await checkIfMember(payload);
  };

  // parse time
  const hour = parseInt(time.split(":")[0]);
  const minutes = time.split(":")[1];
  const amPm = hour >= 12 ? "pm" : "am";
  const formattedHour = hour % 12 === 0 ? "12" : (hour % 12).toString();
  const formattedTime = `${formattedHour}:${minutes} ${amPm}`;

  return (
    <div class="col-lg-4 col-md-6 col-sm-12 mb-4 " >
      <div class="card card-small card-post card-post--1">
        <img style={{ height: '10rem' }} class="card-img-top p-1"
          src={
            poster
              ? `https://res.cloudinary.com/dybhuw7aw/${poster}`
              : "https://www.crucial.com.au/blog/wp-content/uploads/2014/12/events_medium.jpg"
          }
          alt={event_name}
        />

        <div class="card-body" style={{ height: '13rem' }} >
          <h5 class="card-title">
            <h5 class="text-fiord-blue">{event_name}</h5>
          </h5>
          <p class="card-text d-inline-block mb-3">
            {description.trim().split(" ").slice(0, 19).join(" ")} ...
          </p>
          <div className="d-flex flex-column justify-content-between">
            <span class="text-muted mb-4">{date} at {formattedTime} </span>
            <div className="d-flex justify-content-between">
              <span class="text-muted">{venue}</span>
              <p>
                <i class="fas fa-user"></i> {organizer}
              </p>
            </div>
          </div>
        </div>
        <div class="card-footer border-top d-flex justify-content-between ">
          <div class="">
            <p class="btn btn-sm btn-white" onClick={handleJoin}>
              <i class=""></i> Register To Attend{" "}
            </p>
          </div>

          <div class="">
            <p class="btn  btn-sm btn-white" onClick={handleMore}>
              <i class=" "></i> Learn More{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
