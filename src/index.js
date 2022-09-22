import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// ReactDOM.render()
// - react-dom 모듈을 통해 컴포넌트를 페이지에 렌더링하는 역할
// - 함수의 첫 번째 파라미터는 페이지에 렌더링할 내용을 JSX형태로 작성하고,
// - 두 번째 파라미터는 해당 JSX를 렌더링할 document의 내부 element를 설정
// React.StrictMode
// - 리액트의 레거시 기능(문자열 ref, componentWillMount)등 사용했을때 경고 출력
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// JSX란? Section4로 이동