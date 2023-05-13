import React from "react";

export default function Sidebar() {
  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: "rgb(228,228,228)",
        padding: "10px",
        gridColumn: "1 / 2",
        gridRow: "1 / 3",
      }}
    >
      <h1>Sidebar</h1>
    </div>
  );
}
