import React, { useRef } from 'react';

export default function ColorInput() {
  const divEl = useRef();
  const inputEl = useRef();

  const changeComponentColor = () => {
    divEl.current.style.backgroundColor = `${inputEl.current.value}`;
  };

  return (
    <div ref={divEl}>
      <input ref={inputEl} type="text" />
      <br />
      <button onClick={changeComponentColor}>Component color 적용</button>
    </div>
  );
}
