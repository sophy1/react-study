import React, { useState } from "react";

export default function InputSample() {
  // useState, onChange를 input마다 만드는게 아니라
  // input에 'name'을 설정하고, 이벤트가 발생했을때 이 값을 참조하도록 구현
  // usetState에서 객체 형태의 상태를 관리한다
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });

  const { name, nickname } = inputs;
  const onChange = (e) => {
    // 우선 e.target에서 name, value 를 추출
    const { name, value } = e.target;
    setInputs({
      ...inputs, // 기존 input 객체를 본사한 뒤
      [name]: value // name key 를 가진 값을 value로 설정
    });
  };
  const onReset = () => {
    // inputs[name] = navlue;
    // 위와 같이 수정하면 안되고, 새로운 객체를 만들어서 변화를 주고 이를 state로 사용
    // 상태가 업데이트 됐음을 리액트 컴포넌트에서 인지하고, 필요한 렌더링을 진행
    // 만약 inputs 참조 메모리주소가 변경되지 않으면(기존 상태를 직접 수정)
    // 값을 바꿔도 리렌더링 되지 않습니다.
    // 불변성을 지켜야지만 컴포넌트 업데이트 성능 최적화를 제대로 수행할 수 있다.
    setInputs({
      name: "",
      nickname: ""
    });
  };
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />

      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}
