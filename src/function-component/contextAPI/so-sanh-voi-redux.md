SO SÁNH GIỮA CONTEXT API VÀ REDUX

1. Context API

- Dễ học
- Là một API được tích hợp sẵn trong React library
- Phù hợp với những dự án nhỏ

2. Redux

- Khó học hơn, phải nắm nhiều khái niệm và cú pháp mới
- Làm cho code có tính tổ chức và dễ maintain hơn
- là một third library nên sẽ tăng bundle size
- Phù hợp với mọi loại dự án

3. Để dử dụng Context trong ReactJS chúng ta có 3 bước:

a. Tạo Context (ví dụ AppContext)

b. Quyết định xem Context chúng ta vừa tạo sẽ được sử dụng ở đâu bằng cách bọc <[tên Context].Provider>(ví dụ AppContext.Provider) bên ngoài component đó thì tất cả component con của nó đều có thể lấy được dữ liệu từ Context

c. Sử dụng dữ liệu từ Context hay còn gọi là Comsumer (tiêu thụ)

- Có 2 cách để lấy dữ liệu
  => useContext
  => Sử dụng <[tên Context].Comsumer> (ví dụ AppContext.Comsumer) áp dụng đối với class component
