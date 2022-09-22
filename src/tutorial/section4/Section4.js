import React from 'react';

function Hello() {
    return (
        <h1>Hello world!</h1>
    );
}

// JSX: JS확장 문법으로 HTML 작성 가능
// babel에 의해서 JS로 변환
// 규칙
// - 감싸인 element
// - closing element
// - JS 표현식 사용 가능
// - if 대신 조건부 연산자
// - AND 연산자(&&)를 사용한 조건부 렌더링
// - undefined 렌더링하지 않기
// - class대신 className 사용
// - 주석
export default function Section4() {
    const titleText = 'Title';
    const isShow = true;
    return (
        <>
            <Hello />
            {titleText}: { isShow && <span>Hello World!</span>}
        </>
    )
}