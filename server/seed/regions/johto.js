const db = require('../db')
const {Region} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
const johto = {
          name: "Johto Region",
          description:"Very similar to its neighboring region Kanto, Johto is mainly low-lying and forested. Johto's eastern half, however, is primarily a large mountain range that separates itself from Kanto."
}

}

await Region.insertOne(johto)

const run = async () => {
    await main()
    db.close()
  }

  run()