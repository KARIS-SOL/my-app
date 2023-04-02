import React from 'react';
import ExampleStyled from './components/ExampleStyled';
// import './App.css';
import TestStyled from './components/TestStyled';
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
      <ExampleStyled />
      <ExampleStyled />
    </div>
  );
}

export default App;
