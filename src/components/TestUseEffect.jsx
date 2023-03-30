import React, { useState, useEffect, useRef } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력하세요');
  const inputValue = useRef();

  const onBtnClick = () => {
    console.log('🖱버튼클릭');
    setCount((cur) => cur + 1);
  };

  const onInputChange = () => {
    console.log('💻 키 입력');
    setText(inputValue.current.value);
  };

  // 화면에 등장하자마자 console 창에 떠있어야함 - mount될때 무조건 한번은 실행되야함
  // useEffect 는 return 을 다 그리고 나서 (html이 전부 다 그려지고나서) 실행됨 before:: 의 개념
  useEffect(() => {
    console.log('🎨 렌더링 할때마다 실행되는 useEffect');
  });

  // 의존성배열 추가
  useEffect(() => {
    console.log('🖲️🕹️ 버튼 클릭 시에만 실행되는 useEffect');
  }, [count]);
  // input 일때만
  useEffect(() => {
    console.log('⌨️ 인풋 입력 시에만 실행되는 useEffect');
  }, [text]);
  // 빈배열을 쓸때
  useEffect(() => {
    console.log('⛏ 최초 마운트 시에만 실행');
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onBtnClick}>+1 버튼</button>
      <br />
      <br />
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onInputChange} />
    </>
  );
}
