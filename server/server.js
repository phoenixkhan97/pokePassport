const express = require('express')
const cors = require('cors')
const logger = require ('morgan')
const routes = require('./routes')
const PORT = 3001
const db = require('./db')
const {Region} = require('./models')
const {Type} = require('./models')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))


app.get('/regions', async (req,res) =>{
    const regions = await Region.find({})
    res.json(regions)
})

app.get('/type', async (req,res) =>{
    const types = await Type.find({})
    res.json(types)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))