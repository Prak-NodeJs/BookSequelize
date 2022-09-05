module.exports = (sequelize, DataTypes) => {
  const UserOrder = sequelize.define('userOrder', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    bookname: {
      type: DataTypes.STRING,
    },

    price: {
      type: DataTypes.INTEGER,
    },
  })

  return UserOrder
}
