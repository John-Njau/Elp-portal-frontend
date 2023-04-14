import React from "react";

const Profile_card = ({
  name,
  profile_image,
  profile_link
}) => {
  return (
    <div class="col-lg-4 profile_card">
      <div class="card card-small card-post mb-4">
        <div class="card-body">
          <div className="d-flex">
            <img src={profile_image} className="card-post__author-avatar card-post__author-avatar--small " style={{width: "auto"}} alt="av" />
            <h4>Hey {name},</h4>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            >
            </div>
          </div>
          <p>your profile is 60% complete</p>
          <a className="profile_link" href={profile_link}>complete your profile</a>
          <hr />
          <div className="text-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_card;
