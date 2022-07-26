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
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))
app.use('/api', routes)


app.get('/api/regions', async (req,res) =>{
    const regions = await Region.find({})
    
    res.json(regions)
})

app.get('/api/types', async (req,res) =>{
    const type = await Type.find({})
    res.json(type)
})





app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

























