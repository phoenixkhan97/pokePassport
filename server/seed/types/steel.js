const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const steel = [{
        name:'Aron',
        hp: 15,
        level:5
     },
     {
        name:'Beldum',
        hp: 14,
        level:5
     },
     {
        name:'Doublade',
        hp:100,
        level:20
     },
     {
        name:'Mawile',
        hp:50,
        level:10
     }
   ]


await Type.insertMany(steel)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()