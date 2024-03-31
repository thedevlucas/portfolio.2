import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstSection from './parts/first-section';
import SecondSection from './parts/second-section';
import UpButton from './components/upButton';
import LoadingScreen from './components/loadingScreen';


//Import styles
import "./assets/css/main.css";
import "./assets/css/scrollbar.css";
import "./assets/css/responsive.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstSection/>
    <SecondSection/>
    <UpButton/>
    <LoadingScreen/>
  </React.StrictMode>
);
