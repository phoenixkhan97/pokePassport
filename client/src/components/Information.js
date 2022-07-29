import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from "react"
const Information =(props)=>{


    const initialType = {
        name:'',
        hp:'',
        level:''
        }
        
    const [types, setTypes] = useState([initialType])
    const [value,setValue] = useState()

    let handleValueChange = (e) =>{
        setValue(e.target.value)
    }

    useEffect(()=>{
        const getType = async()=>{
    
            let res = await axios.get('http://localhost:3001/api/types')
            console.log(res)
            setTypes(res.data)
        }
        getType()
    },[])

    if (!types){
        return(<h1>Loading please wait</h1>)
    }else{

    
    return(



        <div>
            <h1>Poke Passport</h1>
            <p>Name</p>
           

           <Link to='/stamp'>
            <button>Choose your Region!</button>
           </Link>

            
        </div>
    )
    }}
    export default Information