import React, { useState } from 'react';
import Clock from './Clock';
import LifeCycleSample from "./LifeCycleSample";

// 랜덤 색상을 생성합니다
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
const StateAndLifecycle = () => {
    // Toggle <Clock>
    const [enable, setEnable] = useState(true);
    const onToggleTimer = () => {
        setEnable(!enable);
    };
    
    // Toggle <LifeCyleSample>
    const [color, setColor] = useState("#000000");
    const [visible, setVisible] = useState(true);

    const onClick = () => {
        setColor(getRandomColor());
    };
    const onToggle = () => {
        setVisible(!visible);
    };
    

    return (
        <>
          <div> State And Lifecycle </div>
          <hr />
          <button onClick={onToggleTimer}>토글 Timer</button>
          {enable && <Clock />}
          <hr/>
          <button onClick={onClick}>랜덤 색상</button>
          <button onClick={onToggle}>토글</button>
          {visible && <LifeCycleSample color={color} />}
        </>
    );
};

export default StateAndLifecycle;