import React from "react";

// https://ko.reactjs.org/docs/composition-vs-inheritance.html
function Wrapper({ children }) {
  const style = {
    border: "1px solid black",
    padding: "10px"
  };
  return <div style={style}>{children}</div>;
}

export default Wrapper;
