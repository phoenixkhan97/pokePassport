const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const flying = [{
        name:'Rookidee',
        hp: 15,
        level:5,
        value:"flying"
     },
     {
        name:'Noibat',
        hp: 14,
        level:5,
        value:"flying"
     },
     {
        name:'Tropius',
        hp:100,
        level:20,
        value:"flying"
     },
     {
        name:'Rowlet',
        hp:50,
        level:10,
        value:"flying"
     }
   ]


await Type.insertMany(flying)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()