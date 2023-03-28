import React,{useState} from 'react';


export default function StateProblem() {
  let [state, setState] = useState({teacher : '이효석'});
 console.log(state);

  return (
    <div>
      {state.teacher}
      <br />
      <button onClick={() => {
        // 주소값이 같으니깐 [0]일때랑 동일 이라고 컴퓨터는 생각함
        state.teacher = 'tetz';
        const copyObj = {...state};
        // 새로운 배열로 새로운 주소값으로 받은것
        // const copyArr = [...state];
        // setState(copyArr);
        setState(copyObj);
        console.log(state);
      }}>
        1로 만들기
      </button>
    </div>
   );
  }