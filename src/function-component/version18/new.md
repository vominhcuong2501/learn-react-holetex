# CÁC TÌNH NĂNG MỚI:

1. CONCURRENCY

- Là 1 cơ chế rendering mới giúp React can thiệp được vào 1 tiến trình rendering đang diễn ra
- Tạm dừng
- Tiếp tục
- Hùy bỏ
  Không thể can thiệp vào 1 tiến trình rendering đang diễn ra ở các phiên bản React trước (React 17)

2. AUTOMATIC BATCHING

- Là tính năng giúp ta cập nhật nhiều state 1 lúc ở mọi nơi nhưng chỉ gây ra render 1 lần duy nhất (có thể dùng flushSync(callback))

3. TRANSITION

- Urgent updates: những cập nhật mà cần được cập nhật ngay lập tức trên UI (mọi cập nhật state ở React 17 trở về trước đều là Urgent updates)
- Transition updates: những cập nhật mà chúng ta có thể thực hiện từ từ, không cần thiết phải cập nhật ngay lên màn hình

4. STREAMING SERVER RENDERING với SUSPENSE

- Dùng dể tăng trải nghiệm ng dùng, những component cần thgian xử lý sẽ hiện thị trạng thái chờ.

5. Trict Mode

6. Cài dặt version 18

- Cách 1: npm install react react-dom
- Cách 2: vào package.json chỉnh version ở react, react-dom => Xóa package-lock.json + node_modules => npm install => edit index.json như sau:
  import {createRoot} from 'react-dom/client';
  const root = createRoot(document.getElementById('root'));
  root.render(<React.StrictMode><App /></React.StrictMode>)
