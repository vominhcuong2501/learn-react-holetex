import React from "react";

export default function Header({ isOpen, setIsOpen, userData }) {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="header"
      style={{
        backgroundColor: "rgb(228,228,228)",
        padding: "10px",
        gridColumn: isOpen ? "2 / 4" : "1 / 4",
        textAlign: "right",
      }}
    >
      <p
        style={{ cursor: "pointer", margin: "0 0 0 5px" }}
        onClick={toggleSidebar}
      >
        Hello! {userData.hoTen}
      </p>
    </div>
  );
}
