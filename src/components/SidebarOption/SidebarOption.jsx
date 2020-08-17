import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ Icon, title }) => {
  return (
    <>
      <div className="sidebarOption">
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
