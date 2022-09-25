import React, { useRef, useState } from "react";
import UserList from "./UserList";
import mockUsers from "../data/Users";
// section13
import CreateUser from "./CreateUser";

export default function Section12() {
  // useRef Hook은 DOM 선택 이외에도, 컴포넌트 안에서
  // 조회, 수정할 수 있는 변수를 관리하는 것
  // useRef로 관리하는 nextId의 용도는 배열에 새 항목을
  // 추가할때, 새 항목에서 사용할 고유 id를 관리하는 용도
  // userRef의 파라미터 값은 이 값이 .current 값의 기본 값이며 수정, 조회 가능
  const nextId = useRef(4);
  const [users, setUsers] = useState(mockUsers);

  const onCreate = () => {
    // section13
    // useState for users
    const newUser = {
        id: nextId.current,
        username,
        email
    };
    //setUsers(users.concat(newUser));
    setUsers([...users, newUser]);
    console.log(users);
    // 아래는 기존 코드
    setInputs({
      username: "",
      email: ""
    });
    nextId.current += 1;
  };
  
  
  // section13
  // useState -> inputs -> onChange
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  // section14
  const onRemove = (id) => {
    setUsers();
  };

  return (
    <div>
      <h4>Ch1-section12: useRef로 컴포넌트 안의 변수 만들기</h4>
      <UserList users={mockUsers} />
      <h5>Ch1-section13: 배열에 항목 추가하기 </h5>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
      <h5>Ch1-section14: 배열에 항목 제거하기 </h5>
      <UserList users={mockUsers} onRemove={onRemove} />
    </div>
  );
}
