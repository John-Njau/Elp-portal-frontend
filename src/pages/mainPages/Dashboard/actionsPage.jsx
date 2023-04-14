import React, { useState, useEffect } from "react";
import ChapterModal from "./Modals/chapterModal";
import HubModal from "./Modals/hubModal";
import pdf from "jspdf";

import { axiosPublic } from "../../../lib/axios/axios";
import { useLocation } from "react-router-dom";
import MainLayoutAuth from "../../../layouts/MainLayoutAuth";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ActionsPage = () => {
  const [chapterList, setChapterList] = useState([]);
  const [hubs, setHubs] = useState([]);
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dataToPatchChapter, setDataToPatchChapters] = useState(null);
  const [dataToPatchHub, setDataToPatchHub] = useState(null);
  const [dataToPatchOpportunities, setDataToPatchOpportunities] =
    useState(null);
  const location = useLocation();
  const code = location.state.code;
  //console.log(location,location)
  // const data = location.state.data;

  // TODO : Optimize getting data from location.state.data
  // const [userData, setUserData] = useState(location.state.data);
  // let userData = null;

  // console.log("User Data from dashboard", userData);

  console.log("Users code", users);
  // console.log("Data from Admin dashboard", location.state.data);

  const data =
    code === "chapters"
      ? chapterList
      : code === "hubs"
      ? hubs
      : code === "users"
      ? users
      : code === "events"
      ? events
      : code === "opportunities"
      ? opportunities
      : [];

  const [isEdit, setIsEdit] = useState(true);

  useEffect(() => {
    if (code === "chapters") {
      axiosPublic
        .get("api/chapters/")
        .then((response) => setChapterList(response.data.results))
        .catch((error) => console.log(error));
    } else if (code === "hubs") {
      axiosPublic
        .get("api/hubs/")
        .then((response) => setHubs(response.data.results))
        .catch((error) => console.log(error));
    } else if (code === "users") {
      axiosPublic
        .get("api/user/userList")
        .then((response) => setUsers(response.data.results))
        .catch((error) => console.log(error));
    } else if (code === "events") {
      axiosPublic
        .get("api/events/")
        .then((response) => setEvents(response.data))
        .catch((error) => console.log(error));
    } else if (code === "opportunities") {
      axiosPublic
        .get("api/opportunities/")
        .then((response) => setOpportunities(response.data.results))
        .catch((error) => console.log(error));
    }
  }, [isOpen, code]);

  const handleDelete = (id) => {
    console.log("delete id", id);
    if (code === "chapters") {
      axiosPublic
        .delete(`api/chapters/${id}/`)
        .then(() => {
          const newList = chapterList.filter((item) => item.id !== id);
          setChapterList(newList);
        })
        .catch((error) => console.log(error));
    } else if (code === "hubs") {
      axiosPublic
        .delete(`api/hubs/${id}/`)
        .then(() => {
          const newList = hubs.filter((item) => item.id !== id);
          setHubs(newList);
        })
        .catch((error) => console.log(error));
    } else if (code === "opportunities")
      axiosPublic.delete(`api/opportunities/${id}/`).then(() => {
        const newList = opportunities.filter((item) => item.id !== id);
        setOpportunities(newList);
      });
  };

  const handleUpdate = (id) => {
    console.log("id", id);

    const itemToPatch = data.find((item) => item.id === id);
    console.log("ItemToPatch", itemToPatch);
    setDataToPatchChapters(itemToPatch);
    setDataToPatchHub(itemToPatch);
    setDataToPatchOpportunities(itemToPatch);
    setIsEdit(true);
    setIsOpen(true);
  };

  //download table data.

  const handleDownload = () => {
    const doc = new pdf();
    let tableRows = [];
    let tableHeaders = [];

    if (code === "hubs") {
      tableHeaders = ["Hub ID", "Hub Name", "Hub Admin"];
      tableRows = hubs.map((item) => [item.id, item.name, item.hub_admin]);
    } else if (code === "chapters") {
      tableHeaders = [
        "Chapter ID",
        "Chapter Name",
        "Chapter Institution",
        "Chapter Admin",
      ];
      tableRows = chapterList.map((item) => [
        item.id,
        item.name,
        item.institution,
        item.chapter_admin,
      ]);
    } else if (code === "users") {
      tableHeaders = [
        "User ID",
        "Email",
        "First Name",
        "Last Name",
        "Gender",
        "Phone Number",
        "Scholar Type",
        "Scholar Code",
        "PF Number",
        // "Permissions",
      ];
      tableRows = data.map((item) => [
        item.id,
        item.email,
        item.first_name,
        item.last_name,
        item.gender,
        item.phone_number,
        item.scholar_type,
        item.scholar_code,
        item.PF,
        // item.permissions,
      ]);
    } else if (code === "events") {
      tableHeaders = [
        "Event ID",
        "Name",
        "Venue",
        "Organizer",
        "Date",
        "Time",
        "Charges",
        "Description",
      ];
      tableRows = events.map((item) => [
        item.id,
        item.name,
        item.venue,
        item.event_organizer_name,
        item.date,
        item.time,
        item.charges,
        item.description,
      ]);
    } else if (code === "opportunities") {
      tableHeaders = [
        "Opportunity ID",
        "Title",
        "Posted On",
        "Description",
        "Deadline",
      ];
      tableRows = opportunities.map((item) => [
        item.id,
        item.title,
        item.posted_on,
        item.description,
        item.application_deadline,
      ]);
    }

    // Save the document
    doc.autoTable({
      head: [tableHeaders],
      body: tableRows,
    });

    doc.save(`${code}.pdf`);
  };

  //   if name is hub, render hub table
  return (
    <div>
      <div class="page-header row no-gutters py-4">
        <div class="col-11 col-sm-10 text-center text-sm-left mb-0">
          <span class="text-uppercase page-subtitle">Action Page ...</span>
          <h3 class="page-title">{location.state.code}</h3>
        </div>
        <div class="col-1 col-sm-1 text-center text-sm-left mb-0"></div>
      </div>
      <div class="d-flex justify-content-between">
        <h1></h1>
        {/* <button
          class="btn btn-sm"
          onClick={() => {
            setIsOpen(true);
            setIsEdit(false);
          }}
        > */}
        {/* if code is users, hide the button */}
        {/* return code === "users" ? null: */}
        {/* <button className="btn btn-primary">Add</button>; */}
        <div className="m-2 ">
          {code !== "users" && (
            <button
              className="btn btn-primary btn-sm m-2 "
              onClick={() => {
                setIsOpen(true);
                setIsEdit(false);
              }}
            >
              Add {code}
            </button>
          )}
          {/* </button> */}
          <button className="btn btn-primary m-2 " onClick={handleDownload}>
            Download as PDF
          </button>
        </div>

        {isOpen && !isEdit && code === "chapters" && (
          <ChapterModal setIsOpen={setIsOpen} title="Create Chapter" />
        )}
        {isOpen && isEdit && code === "chapters" && (
          <ChapterModal
            setIsOpen={setIsOpen}
            title="Edit Chapter"
            dataToPatch={dataToPatchChapter}
          />
        )}
        {/* render hubModal on condition */}
        {isOpen && !isEdit && code === "hubs" && (
          <HubModal setIsOpen={setIsOpen} title="Create Hub" />
        )}
        {isOpen && isEdit && code === "hubs" && (
          <HubModal
            setIsOpen={setIsOpen}
            title="Edit Hub"
            dataToPatch={dataToPatchHub}
          />
        )}
      </div>
      <table class="table table-striped table-bordered">
        <thead>
          {code === "hubs" && (
            <tr>
              <th>Hub ID</th>
              <th>Hub Name</th>
              <th>Hub Admin</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          )}

          {code === "chapters" && (
            <tr>
              <th>Chapter ID</th>
              <th>Chapter Name</th>
              <th>Chapter Institution</th>
              <th>Chapter Admin</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          )}

          {code === "users" && (
            <tr>
              <th>User ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Scholar type</th>
              <th>Scholar Code</th>
              <th>PF Number</th>
              <th>Change Permissions</th>
            </tr>
          )}
          {code === "opportunities" && (
            <>
              <tr>
                <th>Opportunity ID</th>
                <th>Title</th>
                <th>Department</th>
                <th>Description</th>
                <th>Posted on</th>
                <th>Deadline</th>
                <th>Job Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </>
          )}
          {code === "events" && (
            <>
              <th>Event ID</th>
              <th>Name</th>
              <th>Venue</th>
              <th>Organiser</th>
              {/* <th>Organization</th> */}
              <th>Date</th>
              <th>Time</th>
              <th>Charges</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </>
          )}
        </thead>
        <tbody>
          {/* {code === "users" && (
          {
            userData.map((item) => (

          } */}
          {data.map((item) => (
            <tr key={item.id}>
              {code === "hubs" && (
                <>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.hub_admin}</td>
                  <td
                    onClick={() => {
                      setIsEdit(true);
                      handleUpdate(item.id);
                    }}
                    className="btn-primary btn-sm m-2 "
                  >
                    Edit
                  </td>
                  <td
                    onClick={() => handleDelete(item.id)}
                    className="btn-danger btn-sm m-2"
                  >
                    Delete
                  </td>
                </>
              )}
              {code === "chapters" && (
                <>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.institution}</td>
                  <td>{item.chapter_admin}</td>
                  <td
                    onClick={() => {
                      setIsEdit(true);
                      handleUpdate(item.id);
                    }}
                    className="btn-primary btn-sm m-2 "
                  >
                    Edit
                  </td>
                  <td
                    onClick={() => handleDelete(item.id)}
                    className="btn-danger btn-rounded-circle btn-sm m-2 "
                  >
                    Delete
                  </td>
                </>
              )}
              {code === "users" && (
                <>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.gender}</td>
                  <td>{item.phone_number}</td>
                  <td>{item.scholar_type}</td>
                  <td>{item.scholar_code}</td>
                  <td>{item.PF}</td>
                  <td className="btn-primary btn-sm m-2 ">Change</td>
                </>
              )}
              {code === "opportunities" && (
                <>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.department}</td>
                  <td>{item.description}</td>
                  <td>{item.posted_on}</td>
                  <td>{item.application_deadline}</td>
                  <td>
                    <a href={item.job_description}> {item.job_description}</a>
                  </td>
                  <td className="btn-primary btn-sm m-2 ">Edit</td>
                  <td className="btn-danger btn-sm m-2 ">Delete</td>
                </>
              )}
              {code === "events" && (
                <>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.venue}</td>
                  <td>{item.organiser}</td>
                  {/* <td>{item.organization}</td> */}
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.charges}</td>
                  <td>{item.description}</td>
                  <td className="btn-primary btn-sm m-2 ">Edit</td>
                  <td className="btn-danger btn-sm m-2 ">Delete</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainLayoutAuth(ActionsPage);
