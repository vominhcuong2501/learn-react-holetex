# TẠI SAO không nên dùng Index làm Key trong React???

Khi bạn render 1 mảng mà dùng key={index} có thể sẽ dẫn dến bị lỗi với một số trường hợp sau:

- Thêm phần tử dầu mảng làm cho giá trị của key thay đổi
- Khi dùng filter, search hay sort
