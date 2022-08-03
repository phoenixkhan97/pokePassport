import Home from "./components/Home"
import Form from './components/Form'
import Information from './components/Information'
import Stamp from './components/Stamp'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Final from './components/Final'
import './App.css';



function App() {



  
  return (
    <div className="App">

       <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/characters' element={<Form/>}/>
          <Route path='/information' element={<Information/>}/>
          <Route path='/stamp' element={<Stamp/>}/>
          <Route path ='/final' element={<Final/>}/>
        </Routes>
       </main>


    </div>
  );
}

export default App;
