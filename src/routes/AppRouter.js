
import React from "react";
import { Route, Routes } from "react-router-dom";
// import Test from "../test/Test";
// import Test1 from "../test/test";
//import EventPage from '../pages/events/events';
import Landing from "../pages/landingPage/Landing";
import SignInSide from "../pages/authPages/signIn/signIn";
import SignUp from "../pages/authPages/signUp/signUp";
import HubsPage from "../pages/mainPages/Hubs/hubsPage";
import Opportunities from "../pages/opportunities/Opportunities";
import Events from "../pages/events/Events";
import EventsPage from "../pages/mainPages/EventsPage/EventsPage";
import AdminDashboard from "../pages/mainPages/Dashboard/adminDashboardPage";
import DashboardPage from "../pages/mainPages/Dashboard/dashboard";
import ActionsPage from "../pages/mainPages/Dashboard/actionsPage";
import Profile from "../pages/profile/Profile";
import UpdateProfile from "../pages/profile/UpdateProfile";
import PersistLogin from "../pages/authPages/persistent/PersistLogin";
import RequireAuth from "../pages/authPages/persistent/RequireAuth";
import SingleHub from '../pages/mainPages/Hubs/singleHub';
import ChaptersPage from '../pages/mainPages/Chapters/ChaptersPage';

import ChapterDetails from '../pages/mainPages/Chapters/ChapterDetails';

import Test from '../test/Test';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        * <Route path="/test" element={<Test />} />
      {/* <Route path="/test1" element={<Test1 />} /> */}
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* <Route path="/events" element={<EventPage />} /> */}
        
        
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[100,200,300,400]} />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/:hubdetails" element={<SingleHub />} />
            <Route path="/chapters" element={<ChaptersPage />} />
            <Route path="/:chapterdetails" element={<ChapterDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/update/profile" element={<UpdateProfile />} />
            <Route path="/hubs" element={<HubsPage />} />
            {/* <Route path="/events-page" element={<EventsPage />} /> */}


          </Route>
          <Route element={<RequireAuth allowedRoles={[400]} />}>
          <Route path="/admin-actions" element={<ActionsPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
        </Route>

        
        
      </Routes>
    </>
  );
};

export default AppRouter;