import React from "react";
import MainLayoutAuth from "../../../layouts/MainLayoutAuth";
import "./dashboard.css";
import avatar from "../../../assets/images/avatar.jpeg"
import {
  Profile_Card,
  Dashboard_placeholders,
  Opportunity_Card
} from "../../../components/cards";
import { Event_Card } from "../../../components/cards";

function DashboardPage() {
  return (
    <div>
      <div className="upper_dashboard">
        <div className=" top_dashboard">
          <Dashboard_placeholders />
          <Profile_Card name={"Eric"} profile_link={"update/profile"} profile_image={avatar} />
        </div>
        <a href="../events">
            {" "}
            <h4>Upcoming Events</h4>
          </a>
        <div className="event_cards_container">
          <Event_Card learn_more={"../events"} registration_link={"../events"}/>
          <Event_Card learn_more={"../events"} registration_link={"../events"}/>
        </div>
      </div>
      <div className="lower_dashboard">
        <div className="d-flex">
          <a href="../opportunities">
            {" "}
            <h4>Some opportunities based on your profile</h4>
          </a>
        </div>
        <div className="d-flex flex-wrap posts_context">
        <Opportunity_Card link={"../opportunities"}/>
        <Opportunity_Card link={"../opportunities"}/>
        </div>
      </div>
    </div>
  );
}

export default MainLayoutAuth(DashboardPage);
