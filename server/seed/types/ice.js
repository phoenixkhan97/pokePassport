const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const ice = [{
        name:'Snorunt',
        hp: 15,
        level:5,
        value:"ice"
     },
     {
        name:'Cubchoo',
        hp: 14,
        level:5,
        value:"ice"
     },
     {
        name:'Froslass',
        hp:100,
        level:20,
        value:"ice"
     },
     {
        name:'Spheal',
        hp:50,
        level:10,
        value:"ice"
     }
   ]


await Type.insertMany(ice)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()