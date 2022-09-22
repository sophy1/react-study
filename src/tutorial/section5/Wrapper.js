import React from "react";

// 컴포넌트 태그 사이에 넣고 싶은 값을 조회할때는 props.children을 통회
// https://ko.reactjs.org/docs/composition-vs-inheritance.html
function Wrapper({ children }) {
  const style = {
    border: "1px solid black",
    padding: "10px"
  };
  return <div style={style}>{children}</div>;
}

export default Wrapper;
