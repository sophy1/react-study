import React, { useState, useRef } from "react";

/**
 * @description section10. useRef로 특정 DOM 선택
 */
export default function InputSample() {
  // useState, onChange를 input마다 만드는게 아니라
  // input에 'name'을 설정하고, 이벤트가 발생했을때 이 값을 참조하도록 구현
  // usetState에서 객체 형태의 상태를 관리한다
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });
  // useRef()를 사용하여 Ref객체를 만들고, 이 객체를 우리가 선택하고 싶은
  // DOM element에 ref값으로 설정
  // Ref 객체의 .current 값은 우리 원하는 DOM을 가리킨다
  const nameInput = useRef();

  const { name, nickname } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs, // 기존 input 객체를 본사한 뒤
      [name]: value // name key 를 가진 값을 value로 설정
    });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nickname: ""
    });
    // input에 focus하는 focus() DOM API 호출
    nameInput.current.focus();
  };
  return (
    <div>
      <input
        ref={nameInput}
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
      />
      <h5>Ref 사용</h5>
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
