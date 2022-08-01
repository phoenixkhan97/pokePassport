const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const bug = [{
        name:'Joltik',
        hp: 15,
        level:5,
        value:"bug"
     },
     {
        name:'Parasect',
        hp: 24,
        level:8,
        value:"bug"
     },
     {
        name:'Vikavolt',
        hp:100,
        level:20,
        value:"bug"
     },
     {
        name:'Ninjask',
        hp:50,
        level:10,
        value:"bug"
     }
   ]


await Type.insertMany(bug)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()