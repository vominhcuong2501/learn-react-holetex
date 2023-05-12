import React, { forwardRef, useImperativeHandle, useState } from "react";

function Children(props, ref) {
    const styleLabel = {
        width: "100px",
        display: "inline-block",
    };
    const [userInfo, setUserInfo] = useState({
        name: "Cuong",
        age: 27
    })

    // console.log("ref", ref);

    // giúp component cha lấy dữ liệu và thực hiện sự kiện của component con
    // giúp component cha không bị re-render khi state thay dổi o component con
    useImperativeHandle(ref, () => {
        return {
            test: () => {
                return userInfo;
            },
            submitForm: submitForm
        }
    })

    const submitForm = () => {
        alert("ARE YOU OK???");
    }

    return (
        <>
            <h3>Login form</h3>
            <form action="">
                <label style={styleLabel} htmlFor="user-name">
                    User Name
                </label>
                <input type="text" id="user-name" />
                <br />
                <br />
                <label style={styleLabel} htmlFor="password">
                    Password
                </label>
                <input type="password" id="password" />
                <br />
                <br />
                <button onClick={submitForm}>Login</button>
            </form>
        </>
    );
}
export default forwardRef(Children)