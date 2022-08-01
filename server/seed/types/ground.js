const db = require('../../db')
const {Type} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
    const ground = [{
        name:'Cubone',
        hp: 15,
        level:5,
        value:"ground"
     },
     {
        name:'Mudbray',
        hp: 14,
        level:5,
        value:"ground"
     },
     {
        name:'Marowak',
        hp:100,
        level:20,
        value:"ground"
     },
     {
        name:'Goblett',
        hp:50,
        level:10,
        value:"ground"
     }
   ]


await Type.insertMany(ground)
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()