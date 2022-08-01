const mongoose = require('mongoose')

const RegionSchema = require('./region')
const TypeSchema = require('./type')
const UserSchema = require('./user')



const Region = mongoose.model("region", RegionSchema)
const Type = mongoose.model("type", TypeSchema)
const User = mongoose.model("user", UserSchema)

module.exports = {
    Region,
    Type,
    User
}