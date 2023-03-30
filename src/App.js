import React from 'react';
import './App.css';
import PracticeTimerRender from './components/PracticeTimerRender';

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
      <PracticeTimerRender />
    </div>
  );
}

export default App;
