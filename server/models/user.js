const {Schema} = require('mongoose')

const User = new Schema(
    {
        name:{type:String, required:true, minlength:3},
        age:{type:String, required:true},
        gender:{type:String, required:true},
        
        
    },
    {timestamps:true}
)
module.exports = User