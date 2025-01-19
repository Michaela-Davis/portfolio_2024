import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import App from './App';
import Rocket from './components/Rocket';
// import Puppet from './components/Puppet';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="rocket" element={<Rocket />} />
        {/* <Route path="puppet element={<Puppet />} /> */}
        {/* <Route path="aaa" element={<Work />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
