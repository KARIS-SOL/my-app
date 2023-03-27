// class component로 바꿔보기
import {Component} from "react";

class MainHeader extends Component {
  constructor() {
    // super 객체로 this를 받아와야만 this 가 생성됨
    super();
    this.cass = true;
  }
  render () {
    return (
      <h1>Hello, {this.cass ? "카스" : "쏘맥"}  world!</h1>
    )
  } 
}

export default MainHeader;




// function MainHeader() {
//   // 순수 js 부분
//   const pororo = '뽀로로';
//   const friend = '친구들';
//   const arr = [1,2,3,4,5,];
//   const cass = true;
  
//   // 실제로 그려지는 부분
//   return (
//     // <h1>Hello, {arr.map((el) => el)} World!</h1>
//     <h1>Hello, {cass ? "카스" : 'dd'} World!</h1>
//   )
// }


// // App.js 로 보내기
// export default MainHeader;


