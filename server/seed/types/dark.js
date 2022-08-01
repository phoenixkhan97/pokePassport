const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const dark = [{
        name:'Meowth',
        hp: 15,
        level:5,
        value:"dark"
     },
     {
        name:'Poochyena',
        hp: 14,
        level:5,
        value:"dark"
     },
     {
        name:'Absol',
        hp:100,
        level:20,
        value:"dark"
     },
     {
        name:'Zorua',
        hp:50,
        level:10,
        value:"dark"
     }
   ]


await Type.insertMany(dark)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()