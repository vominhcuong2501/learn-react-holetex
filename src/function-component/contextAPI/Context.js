import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isDay, setIsDay] = useState(true);
  const themeStyle = {
    day: {
      backgroundColor: "rgb(228,228,228)",
      color: "black",
    },
    night: {
      backgroundColor: "black",
      color: "rgb(228,228,228)",
    },
  };

  const toggleTheme = () => {
    setIsDay(!isDay);
  };
  useEffect(() => {
    fetch("https://628b9961667aea3a3e32d1c5.mockapi.io/api/teachers")
      .then((res) => res.json())
      .then((res) => {
        // do dùng dể làm profile nên lấy data 1 user thôi
        setUserData(res[2]);
      });
  }, []);
  return (
    <AppContext.Provider
      value={{
        userData,
        isOpen,
        setIsOpen,
        isDay,
        setIsDay,
        themeStyle: themeStyle[isDay ? "day" : "night"],
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
