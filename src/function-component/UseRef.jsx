import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  // 1. giá trị tham chiếu của useRef giữa những lần re-render sẽ dc lưu lại khác với object thuần
  // 2. việc thay dổi giá trị của một tham chiếu không làm component render lại
  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    countRef.current = countRef.current + 1;
  };

  // 3. xử lý vấn dề stale closure
  useEffect(() => {
    setInterval(() => {
      //   setCount(count + 1); mỗi lần thực hiện count sẽ lưu trữ giá trị ban dầu nên count luôn = 0
      countRef.current = countRef.current + 1;
    }, 1000);
  }, []);

  //   4. DOM element
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={handleClick}>CLICK BUTTON</button>
    </div>
  );
}
