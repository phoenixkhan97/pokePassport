import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from "react"
import Type from './Type'

const Information =()=>{

const [selectedPokemon, setSelectedPokemon] = useState(null)
const [types, setTypes] = useState([])


 
useEffect(()=>{
        const getType = async()=>{
    
            let res = await axios.get('http://localhost:3001/api/types')
            console.log(res.data)
            setTypes(res.data.types)
            }
            getType()
        })

//submiting data
const handleSubmit=(e) =>{
    e.preventDefault()

    const newPokemon = {
        name:newData.name,
        hp:newData.hp,
        level:newData.level
    }

    const newPokemons = [...types,newPokemon]
    setTypes(newPokemons)
}

const deletePokemon = async(typesId,index)=>{
    await axios.delete(`http://localhost:3001/api/types/typesId`)
    await getType()
    let modifiedTypes = selectedPokemon
    modifiedTypes.reviews.splice(index,1)
    setSelectedPokemon(modifiedPokemon)
}
    
    return(
    <div className="passport1">
        <div className="textboxbothcontainer">
       <div className="textboxboth">
       
        </div>
        </div>

        <div className="textbox1">
           
           <p> Add To Your Pokedex!</p>


          <form onSubmit = {handleSubmit}>
            <input
            type = 'text'
            name = 'name'
            required = 'required'
            placeholder = 'Name of Pokemon...'
            onChange = {deletePokemon}
            />
            <input
            type = 'text'
            name = 'hp'
            required = 'required'
            placeholder = 'HP...'
            onChange = {deletePokemon}
            />
            <input
            type = 'text'
            name = 'level'
            required = 'required'
            placeholder = 'Level...'
            onChange = {deletePokemon}
            />
            <button type='submit'>Add Pokemon</button>
            <Link to='/final'>
        <button className='btn'>Let's Finalize Your Passport!</button></Link>
        
          </form>
          
           </div>
           <div className="cup"></div>

        </div>
    )
    }
