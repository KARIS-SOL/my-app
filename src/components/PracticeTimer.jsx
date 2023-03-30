import React, { useState, useRef, useEffect } from 'react';

export default function PracticeTimer() {
  const [render, setRender] = useState(false);
  // 시간은 꾸준히 저장되어야함 렌더링이 되어도 값이 유지 - useRef
  const time = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // 실제 시간은 current 에 저장된다
      time.current += 1;
      console.log(time.current);
    }, 1000);
    // timer 멈추기, mount시 딱 한번만 실행 (빈배열)
    return () => {
      clearInterval(timer);
      console.log('타이머 종료');
    };
  }, []);

  return (
    <>
      <h1>{time.current}</h1>
      <button onClick={() => setRender((cur) => !cur)}>시간</button>
    </>
  );
}
