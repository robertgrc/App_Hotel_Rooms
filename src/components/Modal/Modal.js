import React from "react";
import "./Modal.css";

export const Modal = ({ text, visible }) => {
  const classVisible = visible ? "modal_visible" : "";
  return (
    <div className={`modal ${classVisible}`}>
      <div className="modal_content">
        <h3>{text}</h3>
      </div>
    </div>
  );
};
