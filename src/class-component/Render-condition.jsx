import React, { Component } from "react";
const Notification = (props) => {
  //Kiểm tra giá trị của props
  if (props.isShow) {
    //Trả về JSX để hiển thị
    return (
      <ul>
        <li>Thông báo 1</li>
        <li>Thông báo 2</li>
      </ul>
    );
  } else {
    //Trả về null để ẩn
    return null;
  }
};
export default class RenderCondition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowNotification: false,
    };
  }
  render() {
    const { isShowNotification } = this.state;

    return (
      <div style={{ margin: 20 }}>
        <h2>Render condition</h2>
        <button
          onClick={() => {
            //Cập nhật lại state
            this.setState({
              isShowNotification: !isShowNotification,
            });
          }}
        >
          {isShowNotification ? "Hiển thị" : "Ẩn"}
        </button>

        {/* Gọi component Notification */}
        <Notification isShow={isShowNotification} />
      </div>
    );
  }
}
