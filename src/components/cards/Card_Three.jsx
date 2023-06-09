import React from "react";
import { images } from "../../assets/images";

const CardThree = () => {
  return (
    <div class="col-lg-4">
      <div class="card card-small card-post mb-4">
        <div class="card-body">
          <h5 class="card-title">
            Had denoting properly jointure which well books beyond
          </h5>
          <p class="card-text text-muted">
            {" "}
            In said to of poor full be post face snug. Introduced imprudence see
            say unpleasing devonshire acceptance son. Exeter longer...
          </p>
        </div>
        <div class="card-footer border-top d-flex">
          <div class="card-post__author d-flex">
            <a
              href="#"
              class="card-post__author-avatar card-post__author-avatar--small"
              style={{ backgroundImage: `url(${images.avatar})` }}
            >
              Written by James Khan
            </a>
            <div class="d-flex flex-column justify-content-center ml-3">
              <span class="card-post__author-name">James Khan</span>
              <small class="text-muted">21 March 2011</small>
            </div>
          </div>
          <div class="my-auto ml-auto">
            <a class="btn btn-sm btn-white" href="#">
              <i class="far fa-bookmark mr-1"></i> Bookmark{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
