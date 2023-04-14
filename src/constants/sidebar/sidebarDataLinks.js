import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";

export const SidebarDataUser = [
  {
    title: "Dashboard",
    path: "/jdjdj",
    icon: <AiIcons.AiFillDashboard />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
  },
  {
    title: "Menu 1",
    path: "#",
    icon: <FaIcons.FaUsers />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
  },
  {
    icon: <RiIcons.RiFolder2Line />,
    title: "Drop menu",
    path: "#",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        icon: <MdIcons.MdSubdirectoryArrowRight />,
        title: "D M1",
        path: "",
      },
      {
        icon: <MdIcons.MdSubdirectoryArrowRight />,
        title: "D M2",
        path: "",
      },
      {
        icon: <MdIcons.MdSubdirectoryArrowRight />,
        title: "D M3",
        path: "",
      },
    ],
  },
  {
    title: "Menu 2",
    path: "#",
    icon: <FaIcons.FaUsers />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
  },
  {
    title: "Menu 3",
    path: "#",
    icon: <MdIcons.MdAccountBalance />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpFill />,
  },
];
