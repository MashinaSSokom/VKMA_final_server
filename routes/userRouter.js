const Router = require('express')
const router = Router()
const userController = require('../controllers/userController')

router.get('/', userController.getAll)
router.get('/:id', userController.getById)


module.exports = router