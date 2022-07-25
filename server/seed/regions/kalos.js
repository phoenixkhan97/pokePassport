const db = require('../db')
const {Region} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
const kalos = {
          name: "Kalos Region",
          description:"On the west side of Kalos lies a beautiful coastline while the southern and eastern borders are formed by huge mountain ranges."
}

}

await Region.insertOne(kalos)

const run = async () => {
    await main()
    db.close()
  }

  run()