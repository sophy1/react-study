import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {/* false, undefined, null 은 렌더링 안 함*/}
      {isSpecial ? <b>* </b> : null}
      안녕하세요!! {name}
      {isSpecial && <b>* </b>}
    </div>
  );
}

Hello.defaultProps = {
  name: "no-name"
};

export default Hello;
