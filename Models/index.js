const dbConfig = require('./../Config/dbConfig')

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
})

sequelize
  .authenticate()
  .then(() => {
    console.log('connected..')
  })
  .catch((err) => {
    console.log('Error' + err)
  })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./userModel')(sequelize, DataTypes)
db.products = require('./bookModel')(sequelize, DataTypes)
db.admins = require('./adminModel')(sequelize, DataTypes)
db.orders = require('./orderDetailsModel')(sequelize, DataTypes)

db.sequelize
  .sync()
  .then(() => {
    console.log('yes  re-sync')
  })
  .catch((err) => {
    console.log(err)
  })

module.exports = db
