import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="main-footer d-flex p-2 px-3 bg-white border-top">
    <ul class="nav">
    <li class="nav-item" >
        <Link class="nav-link" to="/dashboard"  >Dashboard</Link>
      </li>
      <li class="nav-item" >
        <Link class="nav-link" to="/events">Events</Link>
      </li>
      <li class="nav-item" >
        <Link class="nav-link" to="/chapters">Chapters</Link>
      </li>
      <li class="nav-item" >
        <Link class="nav-link" to="/hubs">Hubs</Link>
      </li>
      <li class="nav-item" >
        <Link class="nav-link" to="/opportunities">Opportunities</Link>
      </li>
      <li class="nav-item" >
        <Link class="nav-link" to="/admin-dashboard"  >Admin Dashboard</Link>
      </li>

    </ul>
    <span class="copyright ml-auto my-auto mr-2">Copyright © 2023
      <a href="#" rel="nofollow">  ELP Tech hub</a>
    </span>
  </footer>
  )
}

export default Footer