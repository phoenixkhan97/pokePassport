const Type = ({type}) =>{

return(
    <div>
       
       <b>Name: {type.name}</b>
       <br/>HP: {type.hp}
       <br/>Level: {type.level}
       <div className="linebreak"></div>
       
    </div>
)


}

export default Type