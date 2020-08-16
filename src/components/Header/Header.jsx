import React from "react";
// import styles from "./Header.module.scss";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerLeft">
          {/* Avatar for logged in user */}
          <Avatar className="headerAvatar" alt="Lucian" src="" />
          {/* Time icon */}
          <AccessTimeIcon />
        </div>
        <div className="headerSearch">
          {/* Search Icon */}
          <SearchIcon />
          <input type="text" name="" id="" placeholder="Search Channel" />
          {/* input */}
        </div>
        <div className="headerRight">
          {/* Help Icon - Question Mark */}
          <HelpOutlineIcon />
        </div>
      </div>
    </>
  );
};

export default Header;
