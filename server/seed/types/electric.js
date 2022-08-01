const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const electric = [{
        name:'Pikachu',
        hp: 15,
        level:5,
        value:"electric"
     },
     {
        name:'Elekid',
        hp: 14,
        level:5,
        value:"electric"
     },
     {
        name:'Toxtricity',
        hp:100,
        level:20,
        value:"electric"
     },
     {
        name:'Emolga',
        hp:50,
        level:10,
        value:"electric"
     }
   ]


await Type.insertMany(electric)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()