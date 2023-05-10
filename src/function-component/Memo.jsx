import React, { useCallback, useMemo, useState } from "react";
import ChildMemo from "./ChildMemo";

// CÁCH 2: nếu count thay đổi thì tách count ra riêng thành 1 component riêng khi setState thì sẽ khong làm Memo re-render lại
// function CountNumber() {
//   const [count, setCount] = useState(1);
//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </>
//   );
// }

// CACH 3:
// function NewComponent({ children }) {
//   const [count, setCount] = useState(1);
//   return (
//     <>
//       <p>Outer count: {count}</p>
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount(count + 1)}>Add</button>
//         {children}
//       </div>
//     </>
//   );
// }

// CÁCH 1: dùng react.memo() ở component con
export default function Memo() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("John");

  // dùng useCallback do khi render hàm sẽ tạo lại và tạo luôn bộ nhớ mới nên prop truyền vô cũng dổi => render component con
  const getUsers = useCallback(() => {
    return fetch(
      "https://628b9961667aea3a3e32d1c5.mockapi.io/api/productPhone"
    );
  });

  return (
    <>
      <p>Outer count: {count}</p>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <ChildMemo name={name} getUsers={getUsers} />
      </div>

      {/* CÁCH 2  */}
      {/* <CountNumber /> */}

      {/* CÁCH 3  */}
      {/* <NewComponent>
        <ChildMemo name={name} getUsers={getUsers} />
      </NewComponent> */}
    </>
  );
}
