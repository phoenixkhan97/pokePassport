const db = require('../db')
const {Region} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
const alola = {
          name: "Alola Region",
          description:"The Alola region consists of four main islands that varies in terrain and weather."
}

}

await Region.insertOne(alola)

const run = async () => {
    await main()
    db.close()
  }

  run()