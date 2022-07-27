import {Link} from 'react-router-dom'

const Button =({text})=>{


    
    return(
        <div>
            <Link to='./characters'>
            <button className="btn">{text}</button></Link>
            
        </div>
        
    )
    }
    export default Button