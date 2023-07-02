Redux Toolkit là một bộ công cụ được cung cấp bởi Redux để giảm bớt độ phức tạp và tăng hiệu suất trong việc quản lý trạng thái ứng dụng. Dưới đây là một hướng dẫn cơ bản về cách sử dụng Redux Toolkit:

1. Cài đặt Redux Toolkit: Bắt đầu bằng việc cài đặt Redux Toolkit thông qua npm hoặc yarn:
   => npm install @reduxjs/toolkit

2. Khởi tạo Redux store: Tạo một file store.js (hoặc tên tùy ý) để khởi tạo Redux store và các middleware cần thiết:
   import { configureStore } from '@reduxjs/toolkit';
   import rootReducer from './reducers'; // Import rootReducer

const store = configureStore({
reducer: rootReducer,
// Other configurations such as middleware
});

export default store;

3. Định nghĩa reducers: Tạo các reducers trong thư mục reducers (hoặc tùy ý) để quản lý trạng thái ứng dụng:
   import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
name: 'counter',
initialState: 0,
reducers: {
increment: (state) => state + 1,
decrement: (state) => state - 1,
},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

4. Sử dụng Redux trong thành phần: Trong các thành phần React, bạn có thể sử dụng Redux Toolkit bằng cách sử dụng các hooks như useSelector và useDispatch:
   import { useSelector, useDispatch } from 'react-redux';
   import { increment, decrement } from './reducers/counter';

function CounterComponent() {
const counter = useSelector((state) => state.counter);
const dispatch = useDispatch();

return (

<div>
<div>Counter: {counter}</div>
<button onClick={() => dispatch(increment())}>Increment</button>
<button onClick={() => dispatch(decrement())}>Decrement</button>
</div>
);
}

Trên đây chỉ là một phần nhỏ của Redux Toolkit, nó cung cấp nhiều tính năng và tiện ích khác như middleware, redux-thunk, createAsyncThunk và createEntityAdapter để quản lý trạng thái ứng dụng một cách hiệu quả. Bạn có thể tìm hiểu thêm trong tài liệu chính thức của Redux Toolkit để tận dụng đầy đủ tiềm năng của nó.
