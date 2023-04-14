import React, { useEffect, useState } from "react";
// import NavBar from "../layouts/common/navbar/NavBar"
import Sidebar from "../layouts/common/sidebar/Sidebar";
import Chapters from "../layouts/contents/chapters/Chapter";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import MainLayoutAuth from "../layouts/MainLayoutAuth";
import { axiosInstance, axiosPublic } from "../lib/axios/axios";
import LandingFooter from "../components/landing/landingComponents/LandingFooter";
// import ChapterData from "../layouts/contents/chapters/ChapterData";

const Test = () => {
  const axiosInstance = useAxiosPrivate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getendpoint();
    postendpoint();
    getChapters();
  }, []);

  //without authentication
  const getendpoint = async () => {
    const response = await axiosPublic.get("api/hubs/");
    console.log("response", response);
  };

  //with Authentication
  const postendpoint = async () => {
    const response = await axiosInstance.post("api/hubs/");
    console.log("response", response);
  };

  const getChapters = async () => {
    const response = await axiosInstance.get("api/chapters/");
    setData(response.data);
    console.log("response", response);
  };

  return (
    <>
      <div>
        {/* <Sidebar/> */}
        {/* <Chapters /> */}
        {/* display chapter data */}
        <div>
          <h1>Test</h1>
          {data.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <img src={item.chapter_profile_image} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default MainLayoutAuth(Test);
