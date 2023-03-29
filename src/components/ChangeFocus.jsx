import React from 'react';
import { useRef } from 'react';

export default function ChangeFocus() {
  // test라는 글자를 초기값으로 주고 <h1>{input1.current}</h1> 여기서 받아서 확인 가능
  const input1 = useRef('test');
  const input2 = useRef();

  const changeFocusOne = () => {
    input1.current.focus();
  };

  const changeFocusTwo = () => {
    input2.current.focus();
  };

  return (
    <div>
      <input ref={input1} />
      <input ref={input2} />
      <h1>{input1.current}</h1>
      <br />
      <br />
      <button onClick={changeFocusOne}>1번 인풋으로 포커스 보내기</button>
      <button onClick={changeFocusTwo}>2번 인풋으로 포커스 보내기</button>
    </div>
  );
}
