import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarHeader">
          <div className="sidebarInfo">
            <h2>Naicul Slack</h2>
            <h3>
              <FiberManualRecordIcon />
              Lucian
            </h3>
          </div>
          <CreateIcon />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
