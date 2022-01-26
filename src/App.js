import React from 'react';
import './App.css';
import './assets/fonts/fonts.css'
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      < Header />
      < Main />
      < Footer />
    </div>
  );
}

export default App;
