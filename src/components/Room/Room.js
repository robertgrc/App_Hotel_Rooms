import React from "react";
import "./Room.css";

export const Room = ({ room, onClick }) => {
  const classStatus = "room_status room_" + room.estado_id;

  const handleClick = () => {
    console.log(room.comentario);
    onClick(room.comentario);
  };

  return (
    <div className="room_item" onClick={handleClick}>
      <div>
        <div>{room.id}</div>
      </div>
      <div>
        <div className={classStatus}></div>
      </div>
    </div>
  );
};
