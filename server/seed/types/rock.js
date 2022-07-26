const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const rock = [{
        name:'Roggenrola',
        hp: 15,
        level:5
     },
     {
        name:'Rockruff',
        hp: 14,
        level:5
     },
     {
        name:'Coalossal',
        hp:100,
        level:20
     },
     {
        name:'Onix',
        hp:50,
        level:10
     }
   ]


await Type.insertMany(rock)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()