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
import ClassState from './components/ClassState';
import StateAndVariable from './components/StateAndVariable';
import StateProblem from './components/StateProblem';
import List from './components/List';
import PropsHeader from './components/PropsHeader';
import MultiProps from './components/MultiProps';
import ClassProps from './components/ClassProps';
import ListChild from './components/ListChild';
import Item from './components/Item';
import CustomList from './components/CustomList';
import TestRef from './components/TestRef';
import ChangeFocus from './components/ChangeFocus';
import RefDomControl from './components/RefDomControl';
import ColorInput from './components/ColorInput';
import RandomQuiz from './components/RandomQuiz';
import Comparing from './components/Comparing';

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
      <Comparing />
    </div>
  );
}

export default App;
