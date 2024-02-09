import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Middle from './middle';
import Main from './mainmiddle';
import Photobot from './photomid';
import Footer
 from './footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <Middle/>
    <Main/>
    <Photobot/>
    <Footer/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

