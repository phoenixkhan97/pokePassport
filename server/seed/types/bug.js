const db = require('../db')
const {Type} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const bug = [{
        name:'Joltik',
        hp: 15,
        level:5
     },
     {
        name:'Parasect',
        hp: 24,
        level:8
     },
     {
        name:'Vikavolt',
        hp:100,
        level:20
     },
     {
        name:'Ninjask',
        hp:50,
        level:10
     }
   ]


await Type.insertMany(bug)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()