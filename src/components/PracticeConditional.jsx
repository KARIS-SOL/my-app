// 조건부렌더링

import React, { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

export default function PracticeConditional() {
  const [condition, setCondition] = useState('1번');
  const onChange = () => {
    condition === '1번' ? setCondition('2번') : setCondition('1번');
    //무한반복
    setCondition(!condition);
  };

  return (
    <>
      {condition === '1번' ? (
        <PracticeOne text={condition} />
      ) : (
        <PracticeTwo text={condition} />
      )}
      <button onClick={onChange}>{condition}</button>
    </>
  );
}