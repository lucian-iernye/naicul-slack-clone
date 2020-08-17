import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "../../firebase";
import Message from "../Message/Message";

const Chat = () => {
  const { roomId } = useParams();

  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timeStamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomMessages);
  return (
    <>
      <div className="chat">
        <div className="chatHeader">
          <div className="chatHeaderLeft">
            <h4 className="chatChannelName">
              <strong>#{roomDetails?.name}</strong>
              <StarBorderOutlinedIcon />
            </h4>
          </div>
          <div className="chatHeaderRight">
            <p>
              <InfoOutlinedIcon />
              Details
            </p>
          </div>
        </div>
        <div className="chatMessages">
          {roomMessages.map(({ message, timeStamp, user, userImage }) => (
            <Message
              message={message}
              timeStamp={timeStamp}
              user={user}
              userImage={userImage}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Chat;
