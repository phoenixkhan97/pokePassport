const {Schema} = require('mongoose')

const Type = new Schema(
    {
        name:{type:String, required:true},
        hp:{type:String, required:true},
        level:{type:String, required:true}
        
    },
    {timestamps:true}
)
modeule.exports = Type