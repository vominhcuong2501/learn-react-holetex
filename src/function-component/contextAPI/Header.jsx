import React, { useContext } from "react";
import { AppContext } from "./Context";

export default function Header() {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { userData, isOpen, setIsOpen, themeStyle, isDay, toggleTheme } =
    useContext(AppContext);

  return (
    <div
      className="header"
      style={{
        ...themeStyle,
        padding: "10px",
        gridColumn: isOpen ? "2 / 2" : "1 / 2",
        textAlign: "right",
      }}
    >
      <p
        style={{ cursor: "pointer", margin: "0 0 0 5px" }}
        onClick={toggleSidebar}
      >
        Hello! {userData.hoTen}
      </p>
      <label
        htmlFor=""
        className="switch"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
        }}
      >
        <input type="checkbox" onChange={toggleTheme} checked={isDay} />
        <p style={{ margin: 0 }}>Theme</p>
      </label>
    </div>
  );
}
