import Home from "./components/Home"
import Character from './components/Character'
import Information from './components/Information'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">

       <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/characters' element={<Character/>}/>
          <Route path='/information' element={<Information/>}/>
          <Route></Route>
          <Route></Route>
        </Routes>
       </main>


    </div>
  );
}

export default App;
