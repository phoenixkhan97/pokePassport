import {Link} from 'react-router-dom'

const Button =({text})=>{


    
    return(
        <div>
            <Link to='../pages/characters'>
            <button className="startbtn">{text}</button></Link>
            
        </div>
        
    )
    }
    export default Button