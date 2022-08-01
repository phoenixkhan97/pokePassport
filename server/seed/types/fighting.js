const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const fighting = [{
        name:'Machop',
        hp: 15,
        level:5,
        value:"fighting"
     },
     {
        name:'Riolu',
        hp: 14,
        level:5,
        value:"fighting"
     },
     {
        name:'Kubfu',
        hp:100,
        level:20,
        value:"fighting"
     },
     {
        name:'Panchamp',
        hp:50,
        level:10,
        value:"fighting"
     }
   ]


await Type.insertMany(fighting)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()