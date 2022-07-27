import {Link} from 'react-router-dom'
const Character =(props)=>{
 
    

    return(
        <div>
          
            <h1>Welcome to Poke Airlines. Let's get started on building your passport!</h1>
            <input 
            type='text'
            name={'name'}
            placeholder={'What is your name?'}/>
            <input 
            type='text'
            name={'gender'}
            placeholder={'What is your age?'}/>
            <label>What is your gender?
            <select>
                <option>Choose one</option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-binary</option>
            </select>
            </label>

            <label> Choose one type of Pokemon!
                <select>
                    <option>Choose one
                    </option>
                    <option>Fire</option>
                    <option>Water</option>
                    <option>Grass</option>
                    <option>Ice</option>
                    <option>Ground</option>
                    <option>Rock</option>
                    <option>Steel</option>
                    <option>Fairy</option>
                    <option>Psychic</option>
                    <option>Poison</option>
                    <option>Normal</option>
                    <option>Fighting</option>
                    <option>Flying</option>
                    <option>Dark</option>
                    <option>Dragon</option>
                    <option>Bug</option>
                    <option>Electric</option>
                    <option>Ghost</option>

                </select>
            </label>
            <Link to='/information'>
        <button>Configure Passport</button></Link>
        </div>
    )
            
    }
    export default Character