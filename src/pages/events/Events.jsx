import React, {useEffect, useState} from "react";
import Events_Card from "../../components/cards/Events_Cards";
import MainLayoutAuth from "../../layouts/MainLayoutAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import {ModalBodyComponent,} from "../../components/modal/modal";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {createEventInitialState} from "../helpers/formInitialStates";
import useAuth from "../../hooks/useAuth";

const Events = () => {
    const axiosInstance = useAxiosPrivate();
    const {auth} = useAuth();
    const [eventsData, setEventsData] = useState([]);
    const [hubsData, setHubsData] = useState([]);
    const [chaptersData, setChaptersData] = useState([]);
    const [createEventsData, setCreateEventsData] = useState(
        createEventInitialState
    );
    const [modalCreateEvent, setModalCreateEvent] = useState(false);
    const animatedComponents = makeAnimated();

    const options = [
        {value: "option1", label: "Option 1"},
        {value: "option2", label: "Option 2"},
        {value: "option3", label: "Option 3"},
        {value: "option4", label: "Option 4"},
    ];

    useEffect(() => {
        fetchEventsList();
        fetchHubsList();
        fetchChaptersList();
    }, []);

    async function fetchHubsList() {
        try {
            //const fetchEventsResponses = await axiosInstance.get(`/api/events/`);
            const {data: fetchHubsResponses, status} = await axiosInstance.get(
                `/api/hubs/`
            );
            console.log("fetchEventsResponses", fetchHubsResponses.results);
            let hubsResponses = fetchHubsResponses.results;

            let data = [];
            let x = 1;

            hubsResponses.forEach((hubsResponse) => {
                let {
                    id,
                    name,
                    hub_profile_image,
                    description,
                    created_on,
                    hub_admin,
                } = hubsResponse;

                const datas = {
                    value: id,
                    label: name,
                };

                data.push(datas);
                x = x + 1;
            });

            if (status === 200) {
                //setPropertiesData(propertydatas);
                console.log("data", data);
                setHubsData(data);
            } else {
                //errorNotification("Unable to fetch Partners");
            }
        } catch (ex) {
            //errorNotification("Unable to fetch Partners--");
            console.log({ex});
        }
    }

    async function fetchChaptersList() {
        try {
            //const fetchEventsResponses = await axiosInstance.get(`/api/events/`);
            const {data: fetchChapterResponses, status} = await axiosInstance.get(
                `/api/chapters/`
            );
            console.log("fetchEventsResponses", fetchChapterResponses.results);
            let chapterResponses = fetchChapterResponses.results;

            let data = [];
            let x = 1;

            chapterResponses.forEach((chapterResponse) => {
                let {
                    id,
                    name,
                    chapter_profile_image,
                    institution,
                    registration_fee,
                    description,
                    created_on,
                    chapter_admin,
                } = chapterResponse;

                const datas = {
                    value: id,
                    label: name,
                };

                data.push(datas);
                x = x + 1;
            });

            if (status === 200) {
                //setPropertiesData(propertydatas);
                console.log("data", data);
                setChaptersData(data);
            } else {
                //errorNotification("Unable to fetch Partners");
            }
        } catch (ex) {
            //errorNotification("Unable to fetch Partners--");
            console.log({ex});
        }
    }

    async function fetchEventsList() {
        try {
            //const fetchEventsResponses = await axiosInstance.get(`/api/events/`);
            const {data: fetchEventsResponses, status} = await axiosInstance.get(
                `/api/events/`
            );
            console.log("fetchEventsResponses", fetchEventsResponses);
            let eventsResponses = fetchEventsResponses;

            let data = [];
            let propertyArray = [];
            let x = 1;

            eventsResponses.forEach((eventsResponse) => {
                let {
                    chapters_invited,
                    registration_fee,
                    institution,
                    chapter_admin,
                    chapter_profile_image: poster,
                    date,
                    description,
                    hubs_invited,
                    id: charges,
                    name,
                    organiser,

                    time,
                    venue,
                } = eventsResponse;

                const datas = {
                    _id: x,
                    chapters_invited,
                    charges,
                    date,
                    description,
                    hubs_invited,
                    name,
                    organiser,
                    poster,
                    time,
                    venue,
                };

                data.push(datas);
                x = x + 1;
            });

            if (status === 200) {
                //setPropertiesData(propertydatas);
                console.log("data", data);
                setEventsData(data);
            } else {
                //errorNotification("Unable to fetch Partners");
            }
        } catch (ex) {
            //errorNotification("Unable to fetch Partners--");
            console.log({ex});
        }
    }

    const handleToggleCreateEvent = (item = {}, currentView = null) => {
        setModalCreateEvent(!modalCreateEvent);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("here is the data", createEventsData);

        const {
            eventChapters,
            eventCharges,
            eventDate,
            eventHubs,
            eventName,
            eventTime,
            eventVenue,
            eventDesc,
            eventOrganizerHub,
            eventOrganizerChapter,
        } = createEventsData;

        const check = [
            eventChapters,
            eventCharges,
            eventDate,
            eventHubs,
            eventName,
            eventTime,
            eventVenue,
            eventDesc,
            eventOrganizerHub,
            eventOrganizerChapter,
        ].every((value) => value);
        //console.log("check",check)
        if (check === true) {
            const payload = {
                name: eventName,
                venue: eventVenue,
                date: eventDate,
                time: eventTime,
                charges: eventCharges,
                chapters_invited: eventChapters,
                hubs_invited: eventHubs,
                description: eventDesc,
                event_creator: auth.user_id,
                event_organizer_hub: eventOrganizerHub,
                event_organizer_chapter: eventOrganizerChapter,
            };
            console.log("payload", payload);

            //   "name": "string",
            //   "venue": "string",
            //   "organiser": "string",
            //   "date": "2023-04-07",
            //   "time": "string",
            //   "charges": 0,
            //   "chapters_invited": [
            //     0
            //   ],
            //   "description": "string",
            //   "hubs_invited": [
            //     "string"
            //   ]

            try {
                const createEventResponse = await axiosInstance.post(
                    "/api/events/create/",
                    payload
                );
                console.log("createEventResponse --->", createEventResponse);
                const {status} = createEventResponse;

                if (status === 201) {
                    console.log("added");
                } else {
                }
            } catch (ex) {
                console.log({ex});
            }
        } else if (check === false) {
            //errorNotification("Some fields are not complete ");
        }
    };
    const handleChangeArrayChapters = (inputValue) => {
        let inputs = [];
        console.log("name is ", inputValue);
        inputValue.forEach((record) => {
            console.log(`Value: ${record.value}, Label: ${record.label}`);
            inputs.push(record.value);
        });

        setCreateEventsData({
            ...createEventsData,
            eventChapters: inputs,
        });
        console.log("createEventsData", createEventsData);
    };

    const handleChangeArrayHubs = (inputValue) => {
        let inputs = [];
        console.log("name is ", inputValue);
        inputValue.forEach((record) => {
            console.log(`Value: ${record.value}, Label: ${record.label}`);
            inputs.push(record.value);
        });

        setCreateEventsData({
            ...createEventsData,
            eventHubs: inputs,
        });
        console.log("createEventsData", createEventsData);
    };
    const handleChangeSelectHub = (inputValue) => {
        console.log("name is ", inputValue.value);
        let value = inputValue.value;

        setCreateEventsData({
            ...createEventsData,
            eventOrganizerHub: value,
        });
    };
    const handleChangeSelectChapter = (inputValue) => {
        console.log("name is ", inputValue.value);
        let value = inputValue.value;

        setCreateEventsData({
            ...createEventsData,
            eventOrganizerChapter: value,
        });
    };

    const handleChange = ({currentTarget: input}) => {
        let name = input.id;
        let value = input.value;

        console.log("name is ", name);
        console.log("value is ", value);

        setCreateEventsData({
            ...createEventsData,
            [name]: value,
        });
    };

    return (
        <>
            <div class="page-header row no-gutters py-4">
                <div class="col-11 col-sm-10 text-center text-sm-left mb-0">
                    <span class="text-uppercase page-subtitle">Events ...</span>
                    <h3 class="page-title">My events</h3>
                </div>
                <div class="col-1 col-sm-1 text-center text-sm-left mb-0">
                    <button
                        type="button"
                        class="mb-4 btn btn-md btn-outline-primary mr-5"
                        onClick={handleToggleCreateEvent}
                    >
                        <i class="material-icons">edit</i> Create Event
                    </button>
                </div>
            </div>
            <div class="row">
                {eventsData &&
                    eventsData.map((item, index) => {
                        return <Events_Card item={item} key={index}/>;
                    })}
            </div>

            {/* <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
            
        </div>
      </div>
      <div class="row">
      < Events_Card_One />
      < Events_Card_One />
      < Events_Card_One />
      < Events_Card_One />
      </div> */}

            {/* {
  "name": "string",
  "venue": "string",
  "organiser": "string",
  "date": "2023-04-07",
  "time": "string",
  "charges": 0,
  "chapters_invited": [
    0
  ],
  "description": "string",
  "hubs_invited": [
    "string"
  ]
} */}
            <ModalBodyComponent
                modalState={modalCreateEvent}
                modalTitle={"Create Event "}
                handleClose={handleToggleCreateEvent}
                modalBody={
                    <>
                        <div class="card-header border-bottom">
                            <h6 class="m-0">Create Events</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item px-3">
                                <form onSubmit={handleSubmit}>
                                    <strong class="text-muted d-block mb-2"> Name</strong>
                                    <div class="input-group mb-3">
                                        <div class="input-group input-group-seamless">
                      <span class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">badge</i>
                        </span>
                      </span>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="eventName"
                                                name="eventName"
                                                placeholder="Event Name"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <strong class="text-muted d-block mb-2"> Venue</strong>
                                    <div class="input-group mb-3">
                                        <div class="input-group input-group-seamless">
                      <span class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">festival_1</i>
                        </span>
                      </span>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="eventVenue"
                                                name="eventVenue"
                                                placeholder="Event Venue"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <strong class="text-muted d-block mb-2"> Date</strong>
                                    <div class="input-group mb-3">
                                        <div class="input-group input-group-seamless">
                      <span class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">calendar_month</i>
                        </span>
                      </span>
                                            <input
                                                type="date"
                                                class="form-control"
                                                id="eventDate"
                                                name="eventDate"
                                                placeholder="Event Date"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <strong class="text-muted d-block mb-2"> Time</strong>
                                    <div class="input-group mb-3">
                                        <div class="input-group input-group-seamless">
                      <span class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">schedule</i>
                        </span>
                      </span>
                                            <input
                                                type="time"
                                                class="form-control"
                                                id="eventTime"
                                                name="eventTime"
                                                placeholder="Event Time"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <strong class="text-muted d-block mb-2"> Charges</strong>
                                    <div class="input-group mb-3">
                                        <div class="input-group input-group-seamless">
                      <span class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">payment</i>
                        </span>
                      </span>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="eventCharges"
                                                name="eventCharges"
                                                placeholder="Event Charges"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <strong class="text-muted d-block mb-2"> Description</strong>
                                    <div class="input-group mb-3">
                                        <div class="input-group input-group-seamless">
                      <span class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">payment</i>
                        </span>
                      </span>
                                            <textarea
                                                type="text"
                                                class="form-control"
                                                id="eventDesc"
                                                name="eventDesc"
                                                placeholder="Event Description"
                                                rows="5"
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <strong class="text-muted d-block mb-2">
                                        Hub Organising
                                    </strong>

                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select Hub"
                                        //defaultValue={hubsData[0]}
                                        isDisabled={false}
                                        isLoading={false}
                                        isClearable={true}
                                        isRtl={false}
                                        isSearchable={true}
                                        options={hubsData}
                                        onChange={handleChangeSelectHub}
                                        id="eventOrganizerHub"
                                        name="eventOrganizerHub"
                                    />
                                    <div class="input-group mb-3"></div>
                                    <strong class="text-muted d-block mb-2">
                                        Chapter Organising
                                    </strong>

                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select Chapter"
                                        //defaultValue={hubsData[0]}
                                        isDisabled={false}
                                        isLoading={false}
                                        isClearable={true}
                                        isRtl={false}
                                        isSearchable={true}
                                        options={chaptersData}
                                        onChange={handleChangeSelectChapter}
                                        id="eventOrganizerChapter"
                                        name="eventOrganizerChapter"
                                    />

                                    <div class="input-group mb-3"></div>
                                    <strong class="text-muted d-block mb-2">Invite Hubs</strong>
                                    <Select
                                        closeMenuOnSelect={false}
                                        class="form-control"
                                        components={animatedComponents}
                                        isMulti
                                        options={hubsData}
                                        onChange={handleChangeArrayHubs}
                                        id="sel"
                                        name="sel"
                                        style="form-control"
                                    />
                                    <div class="input-group mb-3"></div>

                                    <strong class="text-muted d-block mb-2">
                                        Invite chapters
                                    </strong>
                                    <Select
                                        closeMenuOnSelect={false}
                                        class="form-control"
                                        components={animatedComponents}
                                        isMulti
                                        options={chaptersData}
                                        onChange={handleChangeArrayChapters}
                                        id="sel"
                                        name="sel"
                                        style="form-control"
                                    />

                                    <br/>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <button
                                                type="submit"
                                                class="mb-4 btn btn-md btn-outline-primary mr-5"
                                            >
                                                <i class="material-icons">edit</i> Create Event
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </>
                }
            />
        </>
    );
};

export default MainLayoutAuth(Events);
