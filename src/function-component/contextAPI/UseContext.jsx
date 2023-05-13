import React, { useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function UseContext() {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch("https://628b9961667aea3a3e32d1c5.mockapi.io/api/teachers")
      .then((res) => res.json())
      .then((res) => {
        // do dùng dể làm profile nên lấy data 1 user thôi
        setUserData(res[0]);
        // console.log(res[0]);
      });
  }, []);
  return (
    <div style={{ display: "grid", gap: 20 }}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} userData={userData} />
      <Content isOpen={isOpen} />
      {isOpen && <Sidebar userData={userData} />}
    </div>
  );
}
