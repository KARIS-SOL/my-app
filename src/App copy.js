// require 보단 import 를 씀
import logo from './logo.svg';
// CSS 사용하는 법
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload 바로된다!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React하러 가자 !
        </a>
      </header>
    </div>
  );
}

export default App;
