import React from 'react';
import './App.css';
import FancyBorder from './components/FancyBorder';
import ImgComponent2 from './components/ImgComponent2';

function App() {
  // function amazingJSX() {
  //   return 'amazingJSX';
  // }
  // strict 모드 때문에 2번 alert 뜸
  // function alertFunc() {
  //   alert('JSX is amazing');
  // }

  // const test = 'test';
  // const str = 'Go Naver';
  // const nameArr = ['뽀로로', '루피', '크롱이'];
  return (
    <div className="App">
      <FancyBorder color="blue">
        <h1>Hello props.children</h1>
        <p>이건 매우 유용한 것 </p>
        <ImgComponent2 />
      </FancyBorder>
    </div>
  );
}

export default App;
