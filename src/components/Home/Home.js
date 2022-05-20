import React, { useState } from "react";
import record from "../data/data.json";
import { Modal } from "../Modal/Modal";
import { RoomList } from "../RoomList/RoomList";
import "./Home.css";

export const Home = () => {
  const { rooms } = record;

  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const showModal = (text) => {
    setVisible(true);
    setText(text);
  };

  return (
    <div className="home_main">
      <RoomList rooms={rooms.filter((r) => r.id <= 10)} onClick={showModal} />
      <RoomList
        rooms={rooms
          .filter((r) => r.id > 10 && r.id % 2 === 0)
          .sort((a, b) => b.id - a.id)}
        onClick={showModal}
      />
      <RoomList
        rooms={rooms
          .filter((r) => r.id > 10 && r.id % 2 === 1)
          .sort((a, b) => b.id - a.id)}
        onClick={showModal}
      />
      <Modal text={text} visible={visible} />
    </div>
  );
};
