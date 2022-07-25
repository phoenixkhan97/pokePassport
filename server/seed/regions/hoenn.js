const db = require('../db')
const {Region} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
const hoenn = {
          name: "Hoenn Region",
          description:"Hoenn has many dramatic environment regions from rainforests to deserts, but its most striking feature is the active volcano, Mt.Chimney. With constant falling ash, terrifying sandstorms and frequent rain, the Hoennregion is not for theweak hearted. "
}

}

await Region.insertOne(hoenn)

const run = async () => {
    await main()
    db.close()
  }

  run()