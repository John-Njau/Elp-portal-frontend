import React, {useEffect, useState} from "react";
import MainLayoutAuth from "../../../layouts/MainLayoutAuth";
import "./Hubspage.scss";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import {axiosPublic} from "../../../lib/axios/axios";

import HubsCard from "../../../components/cards/HubsCard";

function HubsPage() {
    const axiosInstance = useAxiosPrivate();
    const [hubsData, setHubsData] = useState([]);

    useEffect(() => {
        axiosPublic
            .get("api/hubs/")
            .then((response) => setHubsData(response.data.results))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="hubsPage">
            <h2>HUBS</h2>
            <div className="hub-cards-container">
                {hubsData &&
                    hubsData.map((hub, key) => (
                        <HubsCard
                            id={hub.id}
                            title={hub.name}
                            image={hub.hub_profile_image}
                            description={hub.description}
                            data={hub}
                        />
                    ))}
            </div>
        </div>
    );
}

export default MainLayoutAuth(HubsPage);
