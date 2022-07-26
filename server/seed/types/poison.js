const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const poison = [{
        name:'Zubat',
        hp: 15,
        level:5
     },
     {
        name:'Guplin',
        hp: 14,
        level:5
     },
     {
        name:'Toxicroak',
        hp:100,
        level:20
     },
     {
        name:'Mareanie',
        hp:50,
        level:10
     }
   ]


await Type.insertMany(poison)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()