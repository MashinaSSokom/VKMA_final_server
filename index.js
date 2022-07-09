// const http = require('http')
require('dotenv').config({
    path:'./config.env'
})
const cors = require('cors')
const sequelize = require('./db')
const models = require('./models/models')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')

users = []
const port = process.env.port || 8000

const express = require('express')
const app = express()

// const server = http.createServer(app)

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler)

app.get('/', async (req, res) => {
    res.status(200).json({message: "WORKS!"})
})

app.get('/users/:profileId', async (req, res) => {
    const reqProfileId = req.params.profileId

    const user = users.find(user => user.id === reqProfileId)
    if (user) {
        res.status(200).json(user)
        console.log('Нашел', user)
    } else {
        const user = {"id": reqProfileId, "signs": []}
        console.log('Создал', user)
        users.push(user)
        res.status(200).json(user)
    }
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => {
            console.log(`Server running on port ${port}...`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
