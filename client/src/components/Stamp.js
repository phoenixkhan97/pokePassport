import axios from 'axios'
import {useState, useEffect} from "react"
import Region from './Region'
import {Link} from 'react-router-dom'


const Stamp =()=>{

const [regions,setRegions] = useState([])

 
useEffect(()=>{
       const getRegions = async()=>{
   
           let res = await axios.get('http://localhost:3001/api/regions')
           setRegions(res.data)
           console.log(res.data)
           }
           getRegions()
          
   },[])
    
   const handleClick = (e)=>{
  e.preventDefault()



   }

   
  
    return(
        <div className="passport1">
        <div className="textboxbothcontainer">
        {regions.map((region)=>(
            <Region key={region.id} region={region}/>
           
        ))}
          </div>
        
          <div className="textbox1">
           
            <p> Great! Where would you like to start your adventure?</p>
           <select>
            <option>Choose One</option>
            <option>Alola</option>
            <option>Hoenn</option>
            <option>Johto</option>
            <option>Kalos</option>
            <option>Kanto</option>
            <option>Sinnoh</option>
            <option>Unova</option>
           </select>

           <Link to='/information'>
        <button className='btn'>Make Your Team!</button></Link>
            </div>
            <div className="cup"></div>
        </div>
    )
    }
    export default Stamp