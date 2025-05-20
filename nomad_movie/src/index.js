import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import "./routes/style.css"; 
//위에 큰 틀 3가지는 필요한 기능으로서 import ~ from ~ 이런 구조가 필요하고,
//밑에 style.css는 그냥 경로로 작성 ㄱㄴ

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> => 얘네 존재의 이유는 뭐지?
    <App />
  //</React.StrictMode>
);
