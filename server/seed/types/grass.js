const db = require('../../db')
const {Type} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const grass = [{
        name:'Chikorita',
        hp: 15,
        level:5
     },
     {
        name:'Snivy',
        hp: 14,
        level:5
     },
     {
        name:'Lurantis',
        hp:100,
        level:20
     },
     {
        name:'Cottonee',
        hp:50,
        level:10
     }
   ]


await Type.insertMany(grass)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()