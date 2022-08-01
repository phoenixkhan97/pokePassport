const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const fire = [{
        name:'Charmander',
        hp: 15,
        level:5,
        value:"fire"
     },
     {
        name:'Tepig',
        hp: 14,
        level:5,
        value:"fire"
     },
     {
        name:'Rapidash',
        hp:100,
        level:20,
        value:"fire"
     },
     {
        name:'Scorbunny',
        hp:50,
        level:10,
        value:"fire"
     }
   ]


await Type.insertMany(fire)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()