import React from 'react';
import Modal from './Modal';
import ListChild from './ListChild';

export default function List() {
  const dataArr = [
    {
      title: "리액트 공부하기",
      content: "State 익히기"
    },
    {
      title: "코테문제풀기",
      content: "Lv 0 정복하기"
    },
    {
      title: "한강가기",
      content: "경품따기"
    },
  ]
  return (
    <div>
      <h1>오늘 해야 할 일</h1>
      <Modal />
      {/* 콜백함수 인자로써 객체를 받는다, 갯수가 변해도 자동으로 변경됨*/}
      {/* {dataArr.map((el, index) => {
        return <ListChild title={el.title} content={el.content} key={index} />
      })} */}

      {/* 문법구문 축약하기 (return제거) */}
      {dataArr.map((el, index) =><ListChild title={el.title} content={el.content} key={index} />
      )}
      
      {/* key값을 유니크하게 주기 */}
      {dataArr.map((el, index) => {
        return (
          <div key={index}>
            <hr />
            <h2>{el.title}</h2>
            <p>{el.content}</p>
          </div>
        );
      })}
      <Modal />
    </div>
  )
}