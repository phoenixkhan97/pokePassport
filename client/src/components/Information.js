import Character from "./Character"
import {useState, useEffect} from 'react'
const Information =()=>{

const [name, updateName] = useState('')

const [age,updateAge] = useState('')

const addName = ()=>{
    setName = Character.name
}



    
    return(
        <div>

            <h1>Poke Passport</h1>
            <p>Name:{name}</p>


            
        </div>
    )
    }
    export default Information