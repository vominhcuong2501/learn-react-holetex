import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action) {
    case "TANG":
      return state + 1;
    case "GIAM":
      return state - 1;
    case "XOA":
      return 0;
    default:
      return state;
  }
};

const reducer2 = (state, action) => {
  switch (action.type) {
    case "GAN_GIA_TRI":
      return action.data;

    default:
      return state;
  }
};

const initState = {
  loading: false,
  data: [],
  error: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.data,
      };

    default:
      break;
  }
};
export default function UseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [count2, dispatch2] = useReducer(reducer2, 0);
  const [user, userDispatch] = useReducer(userReducer, initState);
  console.log(user);
  const getUsers = () => {
    userDispatch({
      type: "GET_USER_REQUEST",
    });
    setTimeout(() => {
      fetch("https://628b9961667aea3a3e32d1c5.mockapi.io/api/productPhone")
        .then((res) => res.json())
        .then((res) => {
          userDispatch({
            type: "GET_USER_SUCCESS",
            data: res,
          });
        })
        .catch((err) => {
          userDispatch({
            type: "GET_USER_ERROR",
            data: [],
            error: err,
          });
        });
    }, 2000);
  };

  return (
    <>
      {user.loading ? <p>Loading ...</p> : <p>{JSON.stringify(user)}</p>}

      <button onClick={getUsers}>GET USER</button>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("TANG")}>TĂNG</button>
      <button onClick={() => dispatch("GIAM")}>GIẢM</button>
      <button onClick={() => dispatch("XOA")}>XOÁ</button>
      <br />
      <p>Count: {count2}</p>
      <button
        onClick={() =>
          dispatch2({
            type: "GAN_GIA_TRI",
            data: 10,
          })
        }
      >
        GÁN GIÁ TRỊ
      </button>
    </>
  );
}
