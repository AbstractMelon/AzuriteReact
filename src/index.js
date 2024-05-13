import React from 'react';
import reportWebVitals from './reportWebVitals';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';
import Downloads from './components/Pages/Mod';

function Site() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/downloads" component={Downloads} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Site;

reportWebVitals();