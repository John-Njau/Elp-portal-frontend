import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const MenuItemRender = ({ title, path, icon, submenu }) => {
    const pathname = useLocation().pathname;

  return (

<li class="nav-item">
<Link to={path} className={`${pathname === path ? 'nav-link active' : 'nav-link'}`} >
  <i class="material-icons">{icon}</i>
  <span>{title}</span>
</Link>
</li>
  )
}

export default MenuItemRender