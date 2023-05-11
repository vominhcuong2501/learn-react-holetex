import React, { useMemo, useState } from "react";
// CÁCH 1: useMemo là 1 react hook
// useMemo được sử dụng để tránh việc tính toán lại các giá trị không cần thiết, giúp tối ưu hiệu suất của ứng dụng. Hook này nhận vào 2 tham số: hàm tính toán giá trị và mảng dependency. Khi mảng dependency thay đổi, hàm tính toán sẽ được thực thi lại để cập nhật giá trị. Nên sử dụng khi đầu vào là biến không đổi
export default function UseMemo() {
  const [number, setNumber] = useState(1);

  const doubleNumber = useMemo(() => {
    console.log("Double the number");
    return number * 2;
  }, [number]);

  return (
    <div>
      <p>
        {number} * 2 = {doubleNumber}
      </p>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  );
}
