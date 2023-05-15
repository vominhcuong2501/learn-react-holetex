import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { AppProvider } from "./Context";

export default function UseContext() {
  return (
    <AppProvider>
      <div style={{ display: "grid", gap: 20 }}>
        <Header />
        <Content />
        <Sidebar />
      </div>
    </AppProvider>
  );
}
