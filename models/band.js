// * DEPENDENCIES
const { Sequelize, DataTypes, Model}
const sequelize = new Sequelize(process.env.PG_URI)

// * MODEL
class Band extends Model{}

// * EXPORT
module.exports = Band