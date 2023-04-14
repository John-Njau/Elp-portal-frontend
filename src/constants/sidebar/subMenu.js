import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 20px;
  //   border: 1px solid black;
  //   border-radius: 2rem;
  border-radius:1rem;
  color: black;

  &:hover {
    // opacity: 1;
    // border-left: 4px solid #632ce4;
    // cursor: pointer;
    color: #e4e9f7;;
    // border-right: 4px solid #632ce4;
    background: #a32a29a3;
    border-left: 4px solid #fff;
    cursor: pointer;
  }
`;
const DropdownLink = styled(Link)`
background: rgb(255 255 255 / 13%);
height:60px;
padding-left:3rem;
display:flex;
align-items:center;
text-decoration:none;
color:#f5f5f5;
font-size: 18px;

&:hover{
    background: rgb(255 255 255 / 18%);
    cursor:pointer;
    color:blue;
}
`;
const SidebarLabel = styled.span`
  margin-left: 10px;
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;