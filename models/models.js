const sequelize = require('../db')
const {DataTypes} = require("sequelize");

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING, }
})

const Sign = sequelize.define('sign', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING},
    from: {type: DataTypes.INTEGER},
    img: {type: DataTypes.STRING, unique: true, allowNull: true}
})

User.hasMany(Sign)
Sign.belongsTo(User)

module.exports = {
    User,
    Sign
}