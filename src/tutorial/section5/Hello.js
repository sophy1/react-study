import React from "react";

// 함수의 파라미터에서 비구조화 할당 문법을 사용하여 더 간결한 코드 작성
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

// 컴포넌트에 props를 지정하지 않았을때 기본적으로 사용할 값을 설정할때
Hello.defaultProps = {
  name: "no-name"
};

export default Hello;
