import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import Header from './header';
import Banner from './Banner';
import Gallery from './Gallery';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Header/> 
   <Banner/>
   <Gallery/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
