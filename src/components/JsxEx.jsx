// function JsxEx() {
//   const styleObj = {marginTop:'32px', backgroundColor:'skyblue'};
//   const helloStr = "Hello fisrt exercise!"
//   return (
//     <div style={styleObj} onClick = {() => { alert('클릭됨')}}>
//       {helloStr}
//     </div>
//   )

// }

// export default JsxEx;

import React from 'react'

export default function JsxEx() {
  const str = "HEllo, fisrt excercise";
  return (
    <div style= {{marginTop:'32px', backgroundColor:'skyblue'}} onClick = {() => { alert('클릭됨')}}>{str}
    </div>
  );
}