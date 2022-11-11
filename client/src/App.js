import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

export default function App() {

    return (
      <>
        <Navbar />
          <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
          </Routes>
          </Router>
        <Footer />
      </>
    );
}

