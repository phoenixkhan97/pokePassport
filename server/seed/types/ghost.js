const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const ghost = [{
        name:'Shuppet',
        hp: 15,
        level:5,
        value:"ghost"
     },
     {
        name:'Duskull',
        hp: 14,
        level:5,
        value:"ghost"
     },
     {
        name:'Lampent',
        hp:100,
        level:20,
        value:"ghost"
     },
     {
        name:'Haunter',
        hp:50,
        level:10,
        value:"ghost"
     }
   ]


await Type.insertMany(ghost)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()