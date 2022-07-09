const {User, Sign} = require('../models/models')

class userController {
    async getAll(req, res) {
        const users = await User.findAll()
        return res.status(200).json(users)
    }

    async getById(req, res) {
        const {id} = req.params
        const {name} = req.body
        const user = await User.findOrCreate({
            where: {id:id},
            defaults: {id: id, name: name, signs: []},
            include: [{model: Sign, as: 'signs'}]
        })
        return res.status(200).json(user)
    }
}

module.exports = new userController()