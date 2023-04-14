import React from "react";
import {useNavigate} from "react-router-dom";
import {axiosPublic} from "../../lib/axios/axios";
import jwt_decode from "jwt-decode";
import hubsbanner from "../../assets/images/hubsbanner1.jpg";

const HubsCard = ({
                      id,
                      image,
                      title,
                      description,
                      date,
                      institution,
                      data,
                  }) => {
    //get the refresh token from the local storage
    const refresh = localStorage.getItem("refresh");
    const decode = jwt_decode(refresh);
    const {user_id} = decode;
    const user = user_id;
    const hub = id;
    const payload = {hub, user};

    const navigate = useNavigate();

    const checkIfMember = async (datatocheck) => {
        const res = await axiosPublic
            .get("api/hubs/register/")
            .then((res) => {
                console.log("check if user is a member of the hub: ", res);
                const data = res.data.results;
                const {hub, user} = datatocheck;
                const targetUser = user;
                const targethub = hub;
                let pairFound = false;

                for (const result of data) {
                    if (result.user === targetUser && result.hub === targethub) {
                        pairFound = true;

                        console.log("pair found", pairFound);
                        alert("you are already a member of this hub");
                        break;
                    } else {
                        pairFound = false;

                        registerUser(datatocheck);
                        break;
                    }
                }

                return pairFound;
            })
            .catch((error) => {
                console.log("check if user is a member of the hub error: ", error);
            });
    };

    const registerUser = async (payload) => {
        try {
            const res = await axiosPublic.post("api/hubs/register/", payload);
            console.log("register user to hub: ", res);

            if (res.statusText === "Created") {
                alert("You have successfully registered to this hub");
            } else {
                alert("Registration failed");
            }
        } catch (error) {
            console.log("register user to hub error: ", error);
        }
    };
    const handleMore = () => {
        navigate(`/${title}${id}`, {state: {data}});
    };
    const handleJoin = (e) => {
        e.preventDefault();
        console.log("payload", payload);
        checkIfMember(payload).then(r => console.log("r", r));
        // navigate(`/${title}${id}`, { state: { data}});
    };
    return (
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="card card-small card-post card-post--1">
                <img style={{ height: '10rem' }} 
                    class=""
                    src={image? `https://res.cloudinary.com/dybhuw7aw/${image}`: hubsbanner}
                   
                    alt={title}
                />

                <div class="card-body" style={{ height: '13rem' }} >
                    <h5 class="card-title">
                        <a class="text-fiord-blue">
                            {title}
                        </a>
                    </h5>
                    <p class="card-text d-inline-block mb-3">
                        {description.trim().split(" ").slice(0, 19).join(" ")} ...
                    </p>
                    <div className="d-flex justify-content-between">
                        <span class="text-muted">{date}</span>
                        <span class="text-muted">{institution}</span>
                    </div>
                </div>
                <div class="card-footer border-top d-flex justify-content-between ">
                    <div class="">
                        <a class="btn btn-sm btn-white" href="" onClick={handleJoin}>
                            <i class=""></i> Join{" "}
                        </a>
                    </div>

                    <div class="">
                        <a class="btn  btn-sm btn-white" href="" onClick={handleMore}>
                            <i class=" "></i> Learn More{" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HubsCard;
