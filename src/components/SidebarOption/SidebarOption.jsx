import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "../../firebase";

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name:");

    if (channelName) {
      db.collection("rooms").add({ name: channelName });
    }
  };

  return (
    <>
      <div
        className="sidebarOption"
        onClick={addChannelOption ? addChannel : selectChannel}
      >
        {/* && conditional rendering in react */}
        {/* It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.
        Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.*/}
        {Icon && <Icon className="sidebarOptionIcon" />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <h3 className="sidebarOptionChannel">
            <span className="sidebarOptionHash">#</span>
            {title}
          </h3>
        )}
      </div>
    </>
  );
};

export default SidebarOption;
