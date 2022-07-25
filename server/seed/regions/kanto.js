const db = require('../db')
const {Region} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
const kanto = {
          name: "Kanto Region",
          description:"Located in the south of Sinnoh, the Kanto region is known for its vast plains and forests.It's mainly dominated by land, but also has a large bay which opens to a sea in the southwest. Kanto is home to several mountain ranges, including Indigo Plateau and Victory Road."
}

}

await Region.insertOne(kanto)

const run = async () => {
    await main()
    db.close()
  }
  
  run()