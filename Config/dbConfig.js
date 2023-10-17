module.exports = {
  HOST: 'localhost',
  USER: '',
  PASSWORD: '',
  DB: 'bookapi',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
