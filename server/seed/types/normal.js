const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const normal = [{
        name:'Ditto',
        hp: 15,
        level:5,
        value:"normal"
     },
     {
        name:'Eevee',
        hp: 14,
        level:5,
        value:"normal"
     },
     {
        name:'Snorlax',
        hp:100,
        level:20,
        value:"normal"
     },
     {
        name:'Whismur',
        hp:50,
        level:10,
        value:"normal"
     }
   ]


await Type.insertMany(normal)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()