import React from "react";
import "./Message.css";

const Message = ({ message, timeStamp, user, userImage }) => {
  return (
    <>
      <div className="message">
        <img src={userImage} alt={user} />
        <div className="messageInfo">
          <h4>
            {user}{" "}
            <span className="messageTimeStamp">
              {new Date(timeStamp?.toDate()).toUTCString()}
            </span>
          </h4>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Message;
