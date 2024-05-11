import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Community from './components/community';
import Tools from './components/tools';
import Downloads from './components/downloads';
import Home from './components/pages/Home';
import Sample from './components/sample';
import Settings from './components/settings';
import NotFound from './components/pages/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="community" element={<Community />} />
      <Route path="home" element={<Home />} />
      <Route path="tools" element={<Tools />} />
      <Route path="downloads" element={<Downloads />} />
      <Route path="settings" element={<Settings />} />
      <Route path="sample" element={<Sample />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();