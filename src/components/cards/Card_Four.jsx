import React from "react";

const CardFour = ({
  cardTitle,
  CardBody,
  cardFooter,
  cardBadge,
  cardImage,
}) => {
  return (
    <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div class="card card-small card-post h-100">
        <div
          class="card-post__image"
          style={{ backgroundImage: "url('images/content-management/7.jpeg" }}
        ></div>
        <div class="card-body">
          <h5 class="card-title">
            <a class="text-fiord-blue" href="#">
              Extremity so attending objection as engrossed
            </a>
          </h5>
          <p class="card-text">
            Morning prudent removal an letters by. On could my in order never
            it. Or excited certain sixteen it to parties colonel not seeing...
          </p>
        </div>
        <div class="card-footer text-muted border-top py-3">
          <span class="d-inline-block">
            By
            <a class="text-fiord-blue" href="#">
              Alene Trenton
            </a>{" "}
            in
            <a class="text-fiord-blue" href="#">
              News
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardFour;
