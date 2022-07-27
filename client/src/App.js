import Home from "./components/Home"
import Character from './components/Character'
import Information from './components/Information'
import Stamp from './components/Stamp'
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
          <Route path='/stamp' element={<Stamp/>}/>
        </Routes>
       </main>


    </div>
  );
}

export default App;
