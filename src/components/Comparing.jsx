import React, { useState, useRef } from 'react';

export default function Comparing() {
  const [countState, setCountState] = useState(0);

  const countRef = useRef(0);
  // 변수니깐
  let countVar = 0;

  const [render, setRender] = useState(true);

  // 1씩 올리는 함수 그리기
  const countUpState = () => {
    setCountState(countState + 1);
    console.log('State', countState);
  };

  const countUpRef = () => {
    countRef.current += 1;
    console.log('Ref', countRef);
  };

  const countUpVar = () => {
    countVar += 1;
    console.log('Variable', countVar);
  };

  const reRender = () => {
    setRender(!render);
  };

  return (
    <div>
      <h1>State: {countState}</h1>
      <h1>Ref: {countRef.current}</h1>
      <h1>Variable: {countVar}</h1>
      <button onClick={countUpState}>State Up!</button>
      <button onClick={countUpRef}>Ref Up!</button>
      <button onClick={countUpVar}>Variable Up!</button>
      <button onClick={reRender}>Rerendring!</button>
    </div>
  );
}
