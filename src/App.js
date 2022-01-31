import React from 'react';
import './App.css';
import './assets/fonts/fonts.css'
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Cookies from './components/common/cookies/cookies';

function App() {
  return (
    <div className="App">
      < Cookies />
      < Header />
      < Main />
      < Footer />
    </div>
  );
}

export default App;
