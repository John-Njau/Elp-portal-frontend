import React from "react";
import {Link, useNavigate} from "react-router-dom";
import MainLayoutAuth from "../../../layouts/MainLayoutAuth";
import "./chapters.scss";
import {chaptersdata} from "./chapters-data";
import Button from "../../../components/Button";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import {useEffect, useState} from "react";
import {axiosInstance, axiosPublic} from "../../../lib/axios/axios";
import ChaptersCard from "../../../components/cards/ChaptersCard";

function ChaptersPage() {
    const axiosInstance = useAxiosPrivate();
    const [chaptersData, setChaptersData] = useState([]);

    useEffect(() => {
        axiosPublic
            .get("api/chapters")
            .then((response) => {
                setChaptersData(response.data.results);
            })
            .catch((error) => console.log("erratta", error));
    }, []);

    return (
        <div className="chaptersPage">
            <h2>CHAPTERS</h2>
            <div className="chapter-cards-container">
                {chaptersData &&
                    chaptersData.map((chapter, key) => (
                        <ChaptersCard
                            id={chapter.id}
                            title={chapter.name}
                            // image={chapter.chapter_profile_image}
                            chapter_profile_image={chapter.chapter_profile_image}
                            description={chapter.description}
                            data={chapter}
                        />
                    ))}
            </div>
        </div>
    );
}

export default MainLayoutAuth(ChaptersPage);
