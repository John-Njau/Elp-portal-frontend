import React from "react";
import { images } from "../../assets/images";

const Opportunity_Card = ({
  title,
  desc,
  link,
  deadline,
  department,
  handleClick,
  showProfile,
}) => {
  return (
    <div class="col-lg-4">
      <div class="card card-small card-post mb-4">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <span
            style={{
              display: "inline-block",
              paddingBottom: "1rem",
              textTransform: "uppercase",
              letterSpacing: ".125rem",
              color: "#818ea3",
              fontSize: ".625rem",
            }}
          >
            {department}
          </span>
          <p class="card-text text-muted"> {desc}...</p>
        </div>
        <div class="card-footer border-top d-flex">
          <div class="card-post__author d-flex">
            {/* <a href="#" class="card-post__author-avatar card-post__author-avatar--small" style={{ backgroundImage: `url(${images.avatar})` }}>Posted by James Khan</a> */}
            <div class="d-flex flex-column justify-content-center ml-3">
              <span class="card-post__author-name">Application Before</span>
              <small class="text-muted">{deadline}</small>
            </div>
          </div>
          <div class="my-auto ml-auto">
            {/* <a class="btn btn-sm btn-white" href={!showProfile ? link : 'undefined'} onClick={handleClick}> */}
            <a class="btn btn-sm btn-white" href={link} onClick={handleClick}>
              <i class="fa fa-check mr-1"></i> Apply{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunity_Card;
