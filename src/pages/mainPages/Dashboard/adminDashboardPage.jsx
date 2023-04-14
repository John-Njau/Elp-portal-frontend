import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import ActionsPage from "./actionsPage";

import MainLayoutAuth from "../../../layouts/MainLayoutAuth";
import { axiosPublic } from "../../../lib/axios/axios";

function AdminDashboard() {
  const navigate = useNavigate();
  const [chapterList, setChapterList] = useState([]);
  const [hubs, setHubs] = useState([]);
  const [events, setEvents] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosPublic
      .get("api/chapters/")
      .then((response) => setChapterList(response.data.results))
      .catch((error) => console.log(error));

    axiosPublic
      .get("api/hubs/")
      .then((response) => setHubs(response.data.results))
      .catch((error) => console.log(error));

    axiosPublic
      .get("api/events/")
      .then((response) => setEvents(response.data))
      .catch((error) => console.log(error));

    axiosPublic
      .get("api/opportunities/")
      .then((response) => setOpportunities(response.data.results))
      .catch((error) => console.log(error));

    axiosPublic
      .get("api/user/userList")
      .then((response) => setUsers(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  const adminData = [
    {
      name: "Events",
      icon: "calendar",
      count: events?.length,
    },
    {
      name: "Chapters",
      icon: "users",
      count: chapterList?.length,
    },
    {
      name: "Hubs",
      icon: "users",
      count: hubs?.length,
    },
    {
      name: "Opportunities",
      icon: "users",
      count: opportunities?.length,
    },
    {
      name: "Users",
      icon: "users",
      count: users?.length,
    },
  ];

  function handleClick(name) {
    // check if name is chapters
    if (name === "Chapters") {
      navigate("/admin-actions", {
        state: { data: chapterList, code: "chapters" },
      });
    }
    if (name === "Hubs") {
      navigate("/admin-actions", { state: { data: hubs, code: "hubs" } });
    }
    if (name === "Events") {
      navigate("/admin-actions", { state: { data: events, code: "events" } });
    }
    if (name === "Opportunities") {
      navigate("/admin-actions", {
        state: { data: opportunities, code: "opportunities" },
      });
    }
    if (name === "Users") {
      navigate("/admin-actions", { state: { data: users, code: "users" } });
    }
  }

  return (
    <div class="main-content-container container-fluid px-4">
      <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
          <span class="text-uppercase page-subtitle">Dashboard</span>
          <h3 class="page-title">Admin Overview</h3>
        </div>
      </div>

      <div class="row">
        {adminData.map((item) => (
          <div class="col-lg col-md-4 col-sm-12 mb-4" key={item.id}>
            <div
              class="stats-small stats-small--1 card card-small"
              onClick={() => handleClick(item.name)}
            >
              <div class="card-body p-0 d-flex">
                <div class="d-flex flex-column m-auto">
                  <div class="stats-small__data text-center">
                    <span class="stats-small__label text-uppercase">
                      {item.name}
                    </span>
                    <h6 class="stats-small__value count my-3">{item.count}</h6>
                  </div>
                </div>
                <canvas
                  height="120"
                  class="blog-overview-stats-small-5"
                ></canvas>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainLayoutAuth(AdminDashboard);
