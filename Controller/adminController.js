const db = require('./../Models')
const Admin = db.admins
const User = db.users
const Product = db.products
const UserOrder = db.orders

exports.Register = async (req, res) => {
  let info = {
    email: req.body.email,
    password: req.body.password,
  }

  const admin = await Admin.create(info)

  res.status(200).json({
    status: ' registered succesfully',
  })
}

//getAllProducts

exports.login = async (req, res) => {
  try {
    let admin = await Admin.findOne({ email: req.body.email })
    if (
      admin.email === req.body.email &&
      admin.password === req.body.password
    ) {
      res.status(200).json({
        status: ' login Successfully succesfully',
      })
    } else {
      res.send('Invalid email or password')
    }
  } catch (err) {
    res.send(err)
  }
}

exports.getAllBooks = async (req, res) => {
  const product = await Product.findAll({})
  res.send(product)
}

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll({})
  res.send(users)
}

exports.getUserDetails = async (req, res) => {
  const userorder = await UserOrder.findOne({
    where: {
      name: req.body.userName,
    },
  })
  res.send(userorder)
}

exports.getBookUsers = async (req, res) => {
  const product = await UserOrder.findOne({
    where: {
      bookname: req.body.bookname,
    },
  })
  res.send(product)
}
