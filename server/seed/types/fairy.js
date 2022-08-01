const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const fairy = [{
        name:'Togepi',
        hp: 15,
        level:5,
        value:"fairy"
     },
     {
        name:'Ralts',
        hp: 14,
        level:5,
        value:"fairy"
     },
     {
        name:'Clefairy',
        hp:100,
        level:20,
        value:"fairy"
     },
     {
        name:'Snubbull',
        hp:50,
        level:10,
        value:"fairy"
     }
   ]


await Type.insertMany(fairy)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()