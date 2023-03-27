// function BtnToNaver() {
//   return (
//     <a href="https://naver.com">네이버로 가자!</a>
//   )
// }

import {Component} from 'react';
const addr = "https://naver.com"
class BtnToNaver extends Component {

  render () {
    return(
      <a href= {addr}>네이버로 가자!</a>
    )
  }
}

export default BtnToNaver;