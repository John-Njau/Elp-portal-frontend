import React from "react";
import { images } from "../../assets/images";

const CardTwo = ({ cardImageUrl, cardTitle, cardDesc, cardSpan }) => {
  return (
    <div class="col-lg-6 col-sm-12 mb-4">
      <div class="card card-small card-post card-post--aside card-post--1">
        <div
          class="card-post__image"
          style={{ backgroundImage: `url(${cardImageUrl})` }}
        >
          <a href="#" class="card-post__category badge badge-pill badge-info">
            Travel
          </a>
          <div class="card-post__author d-flex">
            <a
              href="#"
              class="card-post__author-avatar card-post__author-avatar--small"
              style={{ backgroundImage: `url(${images.avatar})` }}
            >
              Written by keen
            </a>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            <a class="text-fiord-blue" href="#">
              {cardTitle}
            </a>
          </h5>
          <p class="card-text d-inline-block mb-3">
            {cardDesc.trim().split(" ").slice(0, 19).join(" ")} ...
          </p>
          <span class="text-muted">{cardSpan}</span>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
