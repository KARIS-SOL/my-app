
import React,{Component}  from "react";
import catImg from "../cat.jpg"

// function ImgComponent () {
//   console.log(catImg);
//   return (
//     <img src ={catImg} alt="고양이" />
//   )
// }

class ImgComponent extends Component {
  render () {
    return (
      <img src ={catImg} alt="고양이" />
    )
  }
}

export default ImgComponent;