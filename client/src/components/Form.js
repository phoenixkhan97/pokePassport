import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'


const Form =(props)=>{
    const initialType = {
    name:'',
    hp:'',
    level:''
    }
 
const [types,setTypes] = useState(initialType)

useEffect(()=>{
    const getType = async()=>{

        let res = await axios.get('http://localhost:3001/api/types')
        console.log(res)
        setTypes(res.data)
    }
    getType()
},[])
   
console.log(types)
    return(
        <div>
          <div className="passport">
           
           
            <h1>Welcome to Poke Airlines. Let's get started on building your passport!</h1>
            <form >
            <input 
            type='text'
            name={'name'}
            placeholder={'What is your name?'}/>
            <input 
            type='text'
            name={'gender'}
            placeholder={'What is your age?'}/>
            <label htmlFor='moreThanTwo'>What is your gender?
            <select >
                <option>Choose one</option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-binary</option>
            </select>
            </label>

            <label htmlFor='type'> Choose one type of Pokemon!
                <select>
                    <option>Choose one
                    </option>
                    <option value='fire'></option>
                    <option value='water'>Water</option>
                    <option value='grass'>Grass</option>
                    <option value='ice'>Ice</option>
                    <option value='ground'>Ground</option>
                    <option value='rock'>Rock</option>
                    <option value='steel'>Steel</option>
                    <option value='fairy'>Fairy</option>
                    <option value='psychic'>Psychic</option>
                    <option value='poison'>Poison</option>
                    <option value='normal'>Normal</option>
                    <option value='fighting'>Fighting</option>
                    <option value='flying'>Flying</option>
                    <option value='dark'>Dark</option>
                    <option value='dragon'>Dragon</option>
                    <option value='bug'>Bug</option>
                    <option value='electric'>Electric</option>
                    <option value='ghost'>Ghost</option>

                </select>
            </label>
            <Link to='/information'>
        <button type="submit">Configure Passport</button></Link></form>
        </div>
        </div>
    )
            
    }
    export default Form