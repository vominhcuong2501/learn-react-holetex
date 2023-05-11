import React, { useCallback, useState } from "react";

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

//useCallback được sử dụng để tránh việc tạo ra các hàm mới mỗi khi component được render lại, dẫn đến tốn tài nguyên của ứng dụng. Hook này nhận vào 2 tham số: hàm cần được callback và mảng dependency. Mảng dependency được sử dụng để định nghĩa những giá trị nào khi thay đổi sẽ dẫn đến việc hàm callback cũng phải được thực thi lại.
