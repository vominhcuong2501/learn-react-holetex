import React, { useContext } from "react";
import { AppContext } from "./Context";

export default function UserInformation() {
  const { userData } = useContext(AppContext);

  return (
    <div>
      <h1>UserInformation</h1>
      <p>
        <strong>Họ tên: </strong>
        {userData.hoTen}
      </p>
      <p>
        <strong>Tài khoản: </strong>
        {userData.taiKhoan}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email}
      </p>
      <p>
        <strong>Ngôn ngữ: </strong>
        {userData.ngonNgu.charAt(0).toUpperCase() +
          userData.ngonNgu.slice(1).toLowerCase()}
      </p>
    </div>
  );
}
