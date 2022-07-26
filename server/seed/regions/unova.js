const db = require('../../db')
const {Region} = require('../../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async ()=>{
const unova = {
          name: "Unova Region",
          description:"The Unova region is divided by two rivers that lead into the ocean. Unova also is te home of Castelia City and Nimbasa City, two of the largest cities known."
}
await Region.insertMany(unova)
}



const run = async () => {
    await main()
    db.close()
  }

  run()