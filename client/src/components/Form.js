import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'


const Form =()=>{
   
const [name, setName] =useState()
const [age, setAge] =useState()
const [food, setFood] =useState()
const [drink, setDrink] =useState()



    return(
        <div className="passport1">
          <div className="textbox1">
           
          <h1>Welcome to Poke Airlines. Let's get started on building your passport!</h1>
            <form >
            <input 
            type='text'
            name={'name'}
            placeholder={'What is your name?'}
            onChange= {(e) => setName(e.target.value)} />


            <input 
            type='text'
            name={'age'}
            placeholder={'What is your age?'}
            onChange= {(e) => setAge(e.target.value)} />
           
            <input 
            type='text'
            name={'food'}
            placeholder={'What is your favorite food?'}
            onChange= {(e) => setFood(e.target.value)} />

            <input 
            type='text'
            name={'drink'}
            placeholder={'Coffee or tea?'}
            onChange= {(e) => setDrink(e.target.value)} />

          
            
            </form>
            </div>
        
        <div className="textbox2">
           
          <h1>Name: {name}</h1>
          <p>Age: {age}</p>
          <p>Food: {food}</p>
          <p>Drink: {drink}</p>

          <Link to='/stamp'>
            <input type='submit' value="Choose Your Region!" className='btn btn-block'/>  </Link>
            <br/>
             <Link to='/'>
        <button className='btn'>Prev</button></Link>
            </div>
        
        </div>
        )
            
}




    export default Form