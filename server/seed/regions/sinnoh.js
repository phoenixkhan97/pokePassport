const db = require('../db')
const {Region} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
const sinnoh = {
          name: "Sinnoh Region",
          description:"With sych a varied terrain, Sinnoh is considered one of the largest regions. Some areas are dry and mountainous while other areas are wet and swampy."
}

}

await Region.insertOne(sinnoh)

const run = async () => {
    await main()
    db.close()
  }

  run()