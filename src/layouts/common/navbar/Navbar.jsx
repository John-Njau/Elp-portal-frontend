import React, {useState,useRef,useEffect }from 'react'
import { images } from '../../../assets/images';
import Sidebar from '../sidebar/Sidebar';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false)
  const [dropNotifications, setDropNotifications] = useState(false)
  const dropdownRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {auth} = useAuth()

 const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  const handleToggleUser = () => {
    setDropDown(!dropDown)
  }
  const handleToggleNotification = () => {
    setDropNotifications(!dropNotifications)
  }

  const handleClickOutsideNotification = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropNotifications(false)
    }
  };
  const handleClickOutsideUser = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideUser);
    document.addEventListener("mousedown", handleClickOutsideNotification);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideUser);
      document.removeEventListener("mousedown", handleClickOutsideNotification);
    };
  }, []);

  return (
    <>
      <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0 " style={{backgroundColor:"#ffffff"}}>
      <form action="#" class="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
        <div class="input-group input-group-seamless ml-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <i class="fas fa-search"></i>
            </div>
          </div>
          <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search"/> </div>
      </form>
      <ul class="navbar-nav border-left flex-row" >
        <li class={dropNotifications==false?"nav-item border-right dropdown notifications":"nav-item border-right dropdown notifications show"} onClick={handleToggleNotification}>
          <a class="nav-link nav-link-icon text-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded={dropNotifications==false?"false":"true"}>
            <div class="nav-link-icon__wrapper">
              <i class="material-icons">&#xE7F4;</i>
              <span class="badge badge-pill badge-danger">2</span>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-small" aria-labelledby="dropdownMenuLink" style={{ display: dropNotifications ? 'block' : 'none' }}>
            <a class="dropdown-item" href="#">
              <div class="notification__icon-wrapper">
                <div class="notification__icon">
                  <i class="material-icons">&#xE6E1;</i>
                </div>
              </div>
              <div class="notification__content">
                <span class="notification__category">Analytics</span>
                <p>Your website’s active users count increased by
                  <span class="text-success text-semibold">28%</span> in the last week. Great job!</p>
              </div>
            </a>
            <a class="dropdown-item" href="#">
              <div class="notification__icon-wrapper">
                <div class="notification__icon">
                  <i class="material-icons">&#xE8D1;</i>
                </div>
              </div>
              <div class="notification__content">
                <span class="notification__category">Sales</span>
                <p>Last week your store’s sales count decreased by
                  <span class="text-danger text-semibold">5.52%</span>. It could have been worse!</p>
              </div>
            </a>
            <a class="dropdown-item notification__all text-center" href="#"> View all Notifications </a>
          </div>
        </li>
        <li class="nav-item dropdown" onClick={handleToggleUser}>
          <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            <img class="user-avatar rounded-circle mr-2" src={images.avatar} alt="User Avatar"/>
            <span class="d-none d-md-inline-block">{auth.username}</span>
          </a>
          <div class= {dropDown==false?"dropdown-menu dropdown-menu-small":"dropdown-menu dropdown-menu-small show"}>
            <a class="dropdown-item" href="/profile">
              <i class="material-icons">&#xE7FD;</i> Profile</a>
            {/* <a class="dropdown-item" href="components-blog-posts.html">
              <i class="material-icons">vertical_split</i> Blog Posts</a> */}
            <a class="dropdown-item" href="/update/profile">
              <i class="material-icons">note_add</i>Update Profile</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-danger" href="#">
              <i class="material-icons text-danger">&#xE879;</i> Logout </a>
          </div>
        </li>
      </ul>
      {/* <nav class="nav">
        <a href="#" class="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left mr-0" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar" onClick={toggleSidebar}>
        {sidebarOpen ? <i class="material-icons">&#x2715;</i> : <i class="material-icons">&#xE5D2;</i>}
        </a>
      </nav> */}
     
        </nav>
       
    </>
 
  )
}

export default Navbar