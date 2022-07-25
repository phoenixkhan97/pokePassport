const db = require('../../db')
const {Type} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const fairy = [{
        name:'Togepi',
        hp: 15,
        level:5
     },
     {
        name:'Ralts',
        hp: 14,
        level:5
     },
     {
        name:'Clefairy',
        hp:100,
        level:20
     },
     {
        name:'Snubbull',
        hp:50,
        level:10
     }
   ]


await Type.insertMany(fairy)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()