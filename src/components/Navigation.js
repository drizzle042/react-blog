import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "./blog" },
  { title: "Contact Us", path: "./contact-us" },
  { title: "Login", path: "./login" },
];

const Navigation = ({ user }) => {
  const [menuActive, setmenuActive] = useState(false);

  return (
    <nav className="site-navigation">
      <span className="menu-title">My React Blog</span>
      <div className={`menu-content-container ${menuActive && "active"}`}>
        <ul>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            );
          })}
        </ul>

        <span className="menu-avatar-container">
          <Avatar
            size={38}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <span className="menu-avatar-name">
            {user.firstName} {user.lastName}
          </span>
        </span>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => setmenuActive(!menuActive)}
      />
    </nav>
  );
};

export default Navigation;
