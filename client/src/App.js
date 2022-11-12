import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/PayamBeigi/Portfolio';
import './App.css';

export default function App() {

    return (
      <>
          <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/payambeigi" element={<Portfolio/>} />
          </Routes>
          </Router>
      </>
    );
}

