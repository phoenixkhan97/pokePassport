const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const water = [{
        name:'Sqiurtle',
        hp: 15,
        level:5
     },
     {
        name:'Tentacool',
        hp: 14,
        level:5
     },
     {
        name:'Lapras',
        hp:100,
        level:20
     },
     {
        name:'Sobble',
        hp:50,
        level:10
     }
   ]


await Type.insertMany(water)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()