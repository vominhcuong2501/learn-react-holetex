import React from "react";

export default function ChildMemo() {
  console.log("ChildMemo");
  return <div>Child Memo</div>;
}

// export default React.memo(ChildMemo);
// Memo là high order component, ngăn component con render lại khi k có thay đổi
