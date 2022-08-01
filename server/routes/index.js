const { Router } = require('express')
const controllers = require('../controller/types')

const router = Router()

router.get('/', (req, res) => 
res.send('Pokemon!'))

router.get('/types', controllers.getAllType)

router.get('/types/:id', controllers.getTypeById)

router.post('/types', controllers.createType)

router.put('/types/:id', controllers.updateType)

router.delete('/types/:id', controllers.deleteType)



module.exports = router