import React, { useContext } from "react";
import UserInformation from "./UserInformation";
import { AppContext } from "./Context";

export default function Sidebar() {
  const { isOpen, themeStyle } = useContext(AppContext);
  if (!isOpen) return null;
  return (
    <div
      className="sidebar"
      style={{
        ...themeStyle,
        padding: "10px",
        gridColumn: "1 / 2",
        gridRow: "1 / 3",
      }}
    >
      <UserInformation />
    </div>
  );
}
