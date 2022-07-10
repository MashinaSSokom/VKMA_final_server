const {User, Sign} = require('../models/models')

class userController {
    async getAll(req, res) {
        const users = await User.findAll()
        return res.status(200).json(users)
    }

    async getById(req, res) {
        try {
            const {id} = req.params
            console.log(id)
            const user = await User.findOne({
                where: {id:id},
                include: [{model: Sign, as: 'signs'}]
            })
            return res.status(200).json(user)

        } catch (e) {
            console.log(e)
        }
    }

    async create(req, res) {
        try {
            const {id} = req.params
            const name = req.body.name
            console.log(name)
            const user = await User.create({
                id: id, name: name
            })
            return res.status(200).json(user)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new userController()