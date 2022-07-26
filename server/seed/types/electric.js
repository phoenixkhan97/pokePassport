const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const electric = [{
        name:'Pikachu',
        hp: 15,
        level:5
     },
     {
        name:'Elekid',
        hp: 14,
        level:5
     },
     {
        name:'Toxtricity',
        hp:100,
        level:20
     },
     {
        name:'Emolga',
        hp:50,
        level:10
     }
   ]


await Type.insertMany(electric)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()