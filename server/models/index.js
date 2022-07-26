const mongoose = require('mongoose')

const RegionSchema = require('./region')
const TypeSchema = require('./type')



const Region = mongoose.model("region", RegionSchema)
const Type = mongoose.model("type", TypeSchema)

module.exports = {
    Region,
    Type
}