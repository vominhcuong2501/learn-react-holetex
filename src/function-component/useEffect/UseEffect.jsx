import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("useEffect");
    return () => {
      // clean - up - function
      console.log("useEffect - count - cleanup");
    };
  }, [count]);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    // componentDidMount
    document.addEventListener("scroll", handleScroll);

    // có thể dùng return trong useEffect dể clear sự kiện trước đó nhằm tối ưu performance
    return () => {
      // componentWillUnmount
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "3000px" }}>
      <h2>UseEffect</h2>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p style={{ position: "fixed", bottom: "20px", left: "20px" }}>
        {scrollPosition}
      </p>
    </div>
  );
}
