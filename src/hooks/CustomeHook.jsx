import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

// const fetchCustom = (state, action) => {
//     switch (action.type) {
//         case "fetchAPI/request":
//             return { ...state, isLoading: action.isLoading }
//         case "fetchAPI/success":
//         case "fetchAPI/error":
//             return { ...state, isLoading: action.isLoading, error: action.error, data: action.data }
//         default:
//             return state;
//     }
// }

export default function CustomeHook() {
  const {
    data: users,
    isLoading,
    error,
  } = useFetch("https://628b9961667aea3a3e32d1c5.mockapi.io/api/teachers");

  // const [state, dispatch] = useCustom(fetchCustom, {
  //     data: [],
  //     isLoading: false,
  //     error: null,

  // })
  // const { data: users, isLoading, error } = state;
  // const fetchUser = async () => {
  //     dispatch({
  //         type: "fetchAPI/request",

  //     })
  //     try {
  //         const res = await fetch("https://628b9961667aea3a3e32d1c5.mockapi.io/api/teachers").then(response => response.json())
  //             .then(response => {
  //                 dispatch({
  //                     type: "fetchAPI/success",
  //                     isLoading: false,
  //                     error: null,
  //                     data: response
  //                 })
  //             })
  //             .catch(error => console.error(error));

  //     } catch (err) {
  //         dispatch({
  //             type: "fetchAPI/error",
  //             isLoading: false,
  //             error: null,
  //             data: []
  //         })
  //     }
  // };
  // useEffect(() => {
  //     fetchUser()
  // }, [])
  if (error) {
    return "Sometihing wrong!!!";
  }
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    users.map((user, index) => {
      return <p key={index}>{user.matKhau}</p>;
    })
  );
}
