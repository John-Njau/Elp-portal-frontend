import React from "react";
import { images } from "../../assets/images";

const Post_Card = ({post_audhor, post_date, post_description, post_title, audhor_avatar}) => {
  return (
    <div class="col-lg-4">
      <div class="card card-small card-post mb-4">
        <div class="card-body">
          <h5 class="card-title">
            {post_title}
          </h5>
          <p class="card-text text-muted">
            {" "}
            {post_description}
          </p>
        </div>
        <div class="card-footer border-top d-flex">
          <div class="card-post__author d-flex">
            <a
              href="#"
              class="card-post__author-avatar card-post__author-avatar--small"
              style={{ backgroundImage: `url(${audhor_avatar})` }}
            >
              Written by {post_audhor}
            </a>
            <div class="d-flex flex-column justify-content-center ml-3">
              <span class="card-post__author-name">{post_audhor}</span>
              <small class="text-muted">{post_date}</small>
            </div>
          </div>
          <div class="my-auto ml-auto">
            <a class="btn btn-sm btn-white" href="#">
               Read{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post_Card;
