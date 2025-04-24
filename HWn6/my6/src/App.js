import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Products from './features/products/Products';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Products />
      {/* <header className="App-header">

        {/* <Counter /> */}


      {/* </header> */}
    </div>
  );
}

export default App;
