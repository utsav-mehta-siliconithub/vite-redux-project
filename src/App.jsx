import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react';
import Counter from './features/Counter'
import CounterToolkit from './features/Counter-Toolkit'
import ListComponent from './features/ListComponent'
function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <CounterToolkit />
        {/* <Counter /> */}
      </header>
      {/* <ListComponent /> */}
    </div>
  )
}

export default App
