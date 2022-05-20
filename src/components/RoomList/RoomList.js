import React from "react";
import { Room } from "../Room/Room";
import "./RoomList.css";

export const RoomList = ({ rooms, onClick }) => {
  //   console.log(rooms);
  return (
    <div className="room_list">
      {rooms.map((room) => (
        <Room room={room} key={room.id} onClick={onClick} />
      ))}
    </div>
  );
};
