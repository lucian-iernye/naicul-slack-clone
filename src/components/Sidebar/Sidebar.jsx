import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "../SidebarOption/SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    //run this code ONCE when the sidebar component loads
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <>
      <div className="sidebar">
        <div className="sidebarHeader">
          <div className="sidebarInfo">
            <h2>Naicul Slack</h2>
            <h3>
              <FiberManualRecordIcon />
              {user?.displayName}
            </h3>
          </div>
          <CreateIcon />
        </div>
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
        <SidebarOption Icon={DraftsIcon} title="Saved Items" />
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
        <SidebarOption Icon={PeopleAltIcon} title="People & User Groups" />
        <SidebarOption Icon={AppsIcon} title="Apps" />
        <SidebarOption Icon={FileCopyIcon} title="File Browser" />
        <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
        <hr />
        <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
        {/* connect to the DB and list all the channels */}
        {channels.map((channel) => (
          <SidebarOption title={channel.name} id={channel.id} />
        ))}
      </div>
    </>
  );
};

export default Sidebar;
