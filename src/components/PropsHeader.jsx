import React from 'react';

//props를 text라는 이름으로 받겠다 - 함수에서 인자받아쓰는것과 동일
export default function PropsHeader({text}) {
return (
  // props는 객체로 받으니깐 {} 안에 프로퍼티로 받음
  <h1>{text}</h1>
)
}
