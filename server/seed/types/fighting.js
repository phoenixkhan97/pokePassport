const db = require('../db')
const {Type} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const fighting = [{
        name:'Charmander',
        hp: 15,
        level:5
     },
     {
        name:'Tepig',
        hp: 14,
        level:5
     },
     {
        name:'Rapidash',
        hp:100,
        level:20
     },
     {
        name:'Scorbunny',
        hp:50,
        level:10
     }
   ]


await Type.insertMany(fighting)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()