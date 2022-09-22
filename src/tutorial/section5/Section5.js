import Hello from "./Hello";
import Wrapper from "./Wrapper";

// https://ko.reactjs.org/docs/components-and-props.html
export default function Section5() {
  return (
    <div className="section5">
      <h4>Ch1-section5. props를 통해 컴포넌트에게 전달하기</h4>
      <Wrapper>
        <Hello name="Jihye" color="blue" />
        <Hello color="pink" />
      </Wrapper>
      <h4>Ch1-section6. 조건부 렌더링</h4>
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true} />
        <Hello color="green" isSpecial />
      </Wrapper>
    </div>
  );
}
