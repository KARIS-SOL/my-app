import { useRef, useState } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요');

  // useRef 안에 값이 '초기값'
  const inputValue = useRef();

  // 기존 자바스크립트 이벤트객체로 컨트롤
  const onChangeText = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };

  // useRef 로 값을 변경하는 새로운 함수로 컨트롤
  const onChangeRef = () => {
    console.log(inputValue);
    setText(inputValue.current.value);
  };

  return (
    <div>
      <h1>{text}</h1>
      <input
        ref={inputValue}
        onChange={onChangeRef}
        // onChange={(e) => {
        //   onChangeText(e);
        // }}
      />
    </div>
  );
}
