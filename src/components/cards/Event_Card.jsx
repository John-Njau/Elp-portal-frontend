import React from "react";

const Event_card = ({
  title,
  event_image,
  event_description,
  event_date,
  learn_more,
  registration_link,
}) => {
  return (
    <div class="col-lg-4">
      <div class="card card-small card-post mb-4">
        <div class="card-body">
          <img src={event_image} alt="" />
          <h5 class="card-title">{title}</h5>
          <span
            style={{
              display: "inline-block",
              "padding-bottom": "1rem",
              "text-transform": "uppercase",
              "letter-spacing": ".125rem",
              color: "#818ea3",
              "font-size": ".625rem",
            }}
          >
            {event_date}
          </span>
          <p class="card-text text-muted"> {event_description}</p>
        </div>
        <div class="card-footer border-top d-flex">
          <div class="my-auto mr-auto">
            <a class="btn btn-sm btn-white" href={learn_more}>
               Learn More{" "}
            </a>
          </div>
          <div class="my-auto ml-auto">
            <a class="btn btn-sm btn-white" href={registration_link}>
               Register{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event_card;
