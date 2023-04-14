import React from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Events_Card = ({ item, key }) => {
  const refresh = localStorage.getItem("refresh");
  const decode = jwt_decode(refresh);
  const { user_id } = decode;
  const user = user_id;
  const event = item.id;
  const payload = { event, user };

  const navigate = useNavigate();

  return (
    <div class="col-lg-4">
      <div class="card card-small card-post--1 mb-4">
        <img
          class=""
          src={
            item.poster
              ? `https://res.cloudinary.com/dybhuw7aw/${item.poster}`
              : "https://www.crucial.com.au/blog/wp-content/uploads/2014/12/events_medium.jpg"
          }
          alt={item.name}
        />
        <a href="/" class="card-post__category badge badge-pill badge-primary">
          Technology
        </a>
        {/* </div> */}
        <div class="card-body">
          <h5 class="card-title">{item.name} </h5>
          <p class="card-text text-muted">{item.description}</p>
          <div class="card-text d-flex flex-column">
            <p class="d-inline-block h6">
              {" "}
              <span class="lead">Venue HERE:</span> {item.venue}
            </p>
            <p class="d-inline-block h6">
              {" "}
              <span class="lead">Date:</span> {item.date} at {item.time}
            </p>
          </div>
        </div>
        <div class="card-footer border-top d-flex">
          <span class="d-inline-block"> {item.event_organizer_name}</span>
          <div class="my-auto ml-auto">
            <p class="btn btn-sm btn-white">
              <i class="far fa-bookmark mr-1"></i> Register{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events_Card;

