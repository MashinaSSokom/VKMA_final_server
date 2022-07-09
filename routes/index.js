const Router = require('express')
const router = Router()
const userRouter = require('./userRouter')
const signRouter = require('./signRouter')



router.use('/user', userRouter)
router.use('/sign', signRouter)


module.exports = router