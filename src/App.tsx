import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Timer } from './components/Timer/Timer';

function App() {
  return (
    <div>
      <Header/>
      <div className="conatiner">
        <Timer/>
      </div>      
      <Footer/>
    </div>
  );
}

export default App;
