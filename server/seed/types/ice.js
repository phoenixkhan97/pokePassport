const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const ice = [{
        name:'Snorunt',
        hp: 15,
        level:5
     },
     {
        name:'Cubchoo',
        hp: 14,
        level:5
     },
     {
        name:'Froslass',
        hp:100,
        level:20
     },
     {
        name:'Spheal',
        hp:50,
        level:10
     }
   ]


await Type.insertMany(ice)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()