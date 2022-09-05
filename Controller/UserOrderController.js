const { userInfo } = require('os')
const { title } = require('process')
const db = require('./../Models')

const UserOrder = db.orders
const Product = db.products
const User = db.users

exports.buyBooks = async (req, res) => {
  const product = await Product.findOne({
    where: {
      title: req.body.title,
    },
  })
  const user = await User.findOne({
    where: {
      userName: req.body.userName,
    },
  })

  if (user.userName === req.body.userName && product.title === req.body.title) {
    const orders = {
      name: user.userName,
      bookname: product.title,
      price: product.price,
    }
    const userorder = await UserOrder.create(orders)
    res.status(200).json({
      status: 'Book purchased Successfully',
      data: {
        data: userorder,
      },
    })
  }
}





//getAllProducts
