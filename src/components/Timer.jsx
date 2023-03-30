import React, { useEffect } from 'react';

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머실행중');
    }, 1000);
    // 종료하기 - Clean up
    return () => {
      console.log('컴포넌트 언마운트, 타이머가 종료됩니다');
      clearInterval(timer);
    };
  }, []);

  return <>Timer 실행중</>;
}
