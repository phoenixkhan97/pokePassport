const db = require('../../db')
const {Type} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const dragon = [{
        name:'Dratini',
        hp: 15,
        level:5
     },
     {
        name:'Axew',
        hp: 14,
        level:5
     },
     {
        name:'Goodra',
        hp:140,
        level:20
     },
     {
        name:'Gible',
        hp:50,
        level:10
     }
   ]


await Type.insertMany(dragon)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()