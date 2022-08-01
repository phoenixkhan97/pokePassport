const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const psychic = [{
        name:'Abra',
        hp: 15,
        level:5,
        value:"psychic"
     },
     {
        name:'Espurr',
        hp: 14,
        level:5,
        value:"psychic"
     },
     {
        name:'Mr.Mime',
        hp:100,
        level:20,
        value:"psychic"
     },
     {
        name:'Espeon',
        hp:50,
        level:10,
        value:"psychic"
     }
   ]


await Type.insertMany(psychic)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()