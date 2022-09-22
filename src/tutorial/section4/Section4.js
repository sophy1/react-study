import React from 'react';

function Hello() {
    return (
        <h1>Hello world!</h1>
    );
}

// JSX: JS확장 문법으로 HTML 작성 가능
// babel에 의해서 JS로 변환
// https://ko.reactjs.org/docs/introducing-jsx.html
// https://react.vlpt.us/basic/04-jsx.html
// 규칙
// - 감싸인 element
// - closing element
// - JS 표현식 사용 가능
// - if 대신 조건부 연산자
// - AND 연산자(&&)를 사용한 조건부 렌더링
// - undefined 렌더링하지 않기
// - class대신 className 사용
// - 주석

// function test() 
function Test() {
    // return undefined || '값이 undefined입니다.';
    // return undefined;
    const a = undefined;
    return a;
}
function Section4() {
    const titleText = 'Title';
    const isShow = true;
    return (
        <>
            <Test />
            <Hello />
            {titleText}: { isShow && <span>Hello World!</span>}
        </>
    )
}

export default  Section4;