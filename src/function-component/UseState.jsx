import React, { useState } from "react";

export default function UseState() {
  //   const initialValue = () => {
  //     let total = 0;
  //     for (let i = 0; i < 100; i++) {
  //       total += i;
  //     }
  //     console.log(total);
  //     return total;
  //   };
  //   const [count, setCount] = useState(() => {
  //     return initialValue();
  //   });

  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "test",
    age: 12,
  });
  const handleClick = () => {
    // khi setCount liền như vậy thì biến count không cập nhật kịp dữ liệu
    // setCount(count + 1);
    // setCount(count + 1);
    // khi thêm callback vào hãm sẽ chạy xong và cập nhật count mới chạy cái setCount kế tiếp
    // setCount((prevCount) => {
    //   return prevCount + 1;
    // });
    // setCount((prevCount) => {
    //   return prevCount + 1;
    // });
    setCount(count + 1);

    // useState function !== useState class là khi setState ở function sẽ thay nguyên object mới còn ở class sẽ cập nhật lại dữ liệu
    setUser({ name: "Updated" });
  };
  return (
    <>
      <h2>UseState</h2>
      <p>You clicked {count} times</p>
      <p>Content: {JSON.stringify(user)}</p>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
