import React, { useState } from "react";

// useState Hook을 사용하여 사용자 인터랙션으로 변경되는 값을 상태로 관리하기
export default function Counter() {
  // useState는 state의 default value를 파라미터로 넣어서 호출
  // 호출하면 배열이 반환되는데,
  // 첫 번째 element는 현재 상태, 두 번째 element는 Setter 함수
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    // setNumber(number + 1);
    setNumber((prev) => prev + 1);
  };
  // setNumber를 사용할때 다음 state value를 전달한게 아니라,
  // 값을 업데이트하는 함수를 파라미터로 전달
  // 함수형 업데이트는 나중에 컴포넌트 최적화할때 사용
  const onDecrease = () => {
    // setNumber(number - 1);
    setNumber((prev) => prev - 1);
  };
  return (
    <div>
      <h4 style={{ color: "red" }}>{number}</h4>
      <button onClick={onIncrease}> +1 </button>
      <button onClick={onDecrease}> -1 </button>
    </div>
  );
}
