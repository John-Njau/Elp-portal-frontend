import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {axiosPublic} from "../../lib/axios/axios";
import hubsbanner from "../../assets/images/hubsbanner1.jpg";

const ChaptersCard = ({
                          id,
                          title,
                          description,
                          date,
                          instituion,
                          chapter_profile_image,
                          data,
                      }) => {
    const refresh = localStorage.getItem("refresh");
    const decode = jwt_decode(refresh);

    const user = decode.user_id;
    const chapter = id;
    const payload = {chapter, user};
    const navigate = useNavigate();
    const [isUserMember, setIsUserMember] = useState(false);

    const checkIfMember = async (datatocheck) => {
        const res = await axiosPublic
            .get("api/chapters/register/")
            .then((res) => {
                console.log("check if user is a member of the chapter: ", res);
                const data = res;
                const {chapter, user} = datatocheck;
                const targetUser = user;
                const targetChapter = chapter;
                let pairFound = false;

                for (const result of data.data.results) {
                    if (result.user === targetUser && result.chapter === targetChapter) {
                        pairFound = true;
                        setIsUserMember(true);
                        console.log("pair found", pairFound);
                        alert("you are already a member of this chapter");
                        break;
                    } else {
                        pairFound = false;
                        setIsUserMember(false);
                        registerUser(datatocheck);
                    }
                }

                return pairFound;
            })
            .catch((error) => {
                console.log("check if user is a member of the chapter error: ", error);
            });
    };
    const registerUser = async (data) => {
        try {
            const res = await axiosPublic.post("api/chapters/register/", data);
            console.log("register user to chapter: ", res);

            if (res.statusText === "Created") {
                alert("You have successfully registered to this chapter");
            } else {
                alert("Registration failed");
            }
        } catch (error) {
            console.log("register user to chapter error: ", error);
        }
    };
    const handleMore = () => {
        navigate(`/${title}${id}`, {state: {data}});
    };
    const handleJoin = async (e) => {
        e.preventDefault();
        console.log("dada", payload);
        await checkIfMember(payload);
    };
    return (
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="card card-small card-post card-post--1">
                <img style={{ height: '10rem' }} class="card-img-top p-3" 
                    src={chapter_profile_image? `https://res.cloudinary.com/dybhuw7aw/${chapter_profile_image}` : hubsbanner}
                    alt={title}
                />

                <div class="card-body" style={{ height: '13rem' }} >
                    <h5 class="card-title">
                        <h5 class="text-fiord-blue">{title}</h5>
                    </h5>
                    <p class="card-text d-inline-block mb-3">
                        {description.trim().split(" ").slice(0, 19).join(" ")} ...
                    </p>
                    <div className="d-flex justify-content-between">
                        <span class="text-muted">{date}</span>
                        <span class="text-muted">{instituion}</span>
                    </div>
                </div>
                <div class="card-footer border-top d-flex justify-content-between ">
                    <div class="">
                        <p class="btn btn-sm btn-white" onClick={handleJoin}>
                            <i class=""></i> Join{" "}
                        </p>
                    </div>

                    <div class="">
                        <p class="btn  btn-sm btn-white" onClick={handleMore}>
                            <i class=" "></i> Learn More{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChaptersCard;