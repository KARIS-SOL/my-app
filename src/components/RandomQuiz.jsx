import React, { useState, useRef } from 'react';

export default function RandomQuiz() {
  //state 부분 먼저
  const [again, setAgain] = useState(true);
  const answerInput = useRef();
  // 변수부분
  const firstRandomNumber = Math.floor(Math.random() * 10);
  const secondRandomNumber = Math.floor(Math.random() * 10);
  const arithmeticArr = ['+', '-', 'x'];
  const randomArithmetic = Math.floor(Math.random() * arithmeticArr.length);
  const operator = arithmeticArr[randomArithmetic];

  //함수화 시키기
  const clearInput = () => {
    answerInput.current.value = '';
    answerInput.current.focus();
  };

  // 정답 지정하고 렌더링 하는 부분
  const checkAnswer = () => {
    let answer = 0;
    if (randomArithmetic === 0) {
      answer = firstRandomNumber + secondRandomNumber;
    } else if (randomArithmetic === 1) {
      answer = firstRandomNumber - secondRandomNumber;
    } else {
      answer = firstRandomNumber * secondRandomNumber;
    }

    // input 의 값이 정답일경우 !
    if (answer === Number(answerInput.current.value)) {
      alert('정답입니다!');
      // 리렌더링 해버려서 초기화 시키기 - 무한번 반족
      setAgain(!again);
      clearInput();
    } else {
      // 틀렸을 경우
      alert('틀렸습니다!');
      clearInput();
    }
  };

  return (
    <div>
      <h1>
        {firstRandomNumber} {operator} {secondRandomNumber}
      </h1>
      <input type="text" ref={answerInput} />
      <button onClick={checkAnswer}>정답 제출</button>
    </div>
  );
}
