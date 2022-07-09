const path = require('path')
const {Sign} = require('../models/models')
const ApiError = require('../errors/ApiError')
class signController {
    async getAllByUserId(req, res) {
        const {userId} = req.body
        const signs = await Sign.findAll({
            where: {userId: userId}
        })
        return res.status(200).json(signs)
    }

    async create(req, res, next) {
        try {
            const {userId, text,from} = req.body
            const {img} = req.files
            let fileName = `${userId}_${from}.jpg`
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const sign = await Sign.create({
                text, from, userId, img: fileName
            })

            return res.status(200).json(sign)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
}

module.exports = new signController()