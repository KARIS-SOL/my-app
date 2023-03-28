import React from 'react';

// props 는 객체로 받으니깐 props.userID 등을 구조분해 할당으로 먼저선언해주면 남이 봤을때 깔끔한 코드
export default function MultiProps({text, href, userID}) {

  return(
    <div>
      <h1>{userID} 님 반갑습니다 </h1>
      <a href={href}>{text}</a>
    </div>
  )
}