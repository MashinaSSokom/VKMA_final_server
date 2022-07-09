const Router = require('express')
const router = Router()
const signController = require('../controllers/signController')

router.get('/', signController.getAllByUserId)
router.post('/', signController.create)
// router.use('/sign')


module.exports = router