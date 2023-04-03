import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './components/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode 안에 감싸져있는애들은 두번실행시킴
  <>
    <GlobalStyle />
    <App />
  </>,
);

reportWebVitals();
