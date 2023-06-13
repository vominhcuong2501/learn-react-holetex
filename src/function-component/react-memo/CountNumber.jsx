import React, { useState } from "react";

export default function CountNumber() {
  const [count, setCount] = useState(1);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  );
}
