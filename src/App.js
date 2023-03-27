import logo from './logo.svg';
import './App.css';
import MainHeader from './components/mainHeader';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import Inline from './components/Inline';
import EventHandler from './components/EventHandler';
import JsxEx from './components/JsxEx';
import State from './components/State';
import State2 from './components/State2';
import Counter from './components/Counter';
import Condition from './components/Condition';
import Feel from './components/Feel';

function App() {
  
  // function amazingJSX() {
  //   return 'amazingJSX';
  // }
// strict 모드 때문에 2번 alert 뜸
  // function alertFunc() {
  //   alert('JSX is amazing');
  // }

  // const test = 'test';

  return (
    <div className="App">
      {/* {amazingJSX()} */}
      {/* {alertFunc()} */}
      {/* <img src = {logo} alt ="로고" /> */}
      {/* <div className= {test}>{typeof test === 'string' ? '문자열' : '문자열아님'}</div> */}
      {/* {str} */}
      {/* <ClassComponent />
      <FunctionalComponent />
      <MainHeader />
      <ImgComponent />
      <BtnToNaver />  */}
      {/* <Inline />
      <EventHandler /> */}
      {/* <JsxEx /> */}
      {/* <State /> */}
      {/* <State2 /> */}
      {/* <Counter /> */}
      {/* <Condition /> */}
      <Feel />
      </div>
  );
}


export default App;
