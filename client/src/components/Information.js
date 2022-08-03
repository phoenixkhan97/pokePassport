import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from "react"
import Type from './Type'

const Information =()=>{


const [types, setTypes] = useState([])
const [newData,setNewData] = useState({
    name:'',
    hp:'',
    level:''
})

 
useEffect(()=>{
        const getType = async()=>{
    
            let res = await axios.get('http://localhost:3001/api/types')
            console.log(res.data)
            setTypes(res.data.types)
            }
            getType()
    },[])

//adding data
const handleAddNewData = (e)=>{
    e.preventDefault()

    const fieldName = e.target.getAttribute('name')

    const fieldValue = e.target.value
    const newPokemonData = {...newData}

    newPokemonData[fieldName] = fieldValue 
    setNewData(newPokemonData)
}

//submiting added data
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


    
    return(
    <div className="passport1">
        <div className="textboxbothcontainer">
       <div className="textboxboth">
        {types.map((type)=>(
            <Type key={type.id} type={type}/>
           
        ))}
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
            onChange = {handleAddNewData}
            />
            <input
            type = 'text'
            name = 'hp'
            required = 'required'
            placeholder = 'HP...'
            onChange = {handleAddNewData}
            />
            <input
            type = 'text'
            name = 'level'
            required = 'required'
            placeholder = 'Level...'
            onChange = {handleAddNewData}
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

    export default Information

    