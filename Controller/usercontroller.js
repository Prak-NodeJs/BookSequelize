const db = require('./../Models/')
const jwt = require('jsonwebtoken')
const e = require('express')

const User = db.users
const signToken = (id) => {
  return jwt.sign({ id }, 'hellohowareupuguysjkdf', {
    expiresIn: '80s',
  })
}

exports.Register = async (req, res) => {
  let info = {
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  }

  const user = await User.create(info)
  const token = signToken(user.id)
  res.status(200).json({
    status: ' registered succesfully',
    token,
  })
}

//getAllProducts

exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email })

    if (user.email === req.body.email && user.password === req.body.password) {
      const token = signToken(user.id)
      res.status(200).json({
        status: ' login Successfully succesfully',
        token,
      })
    }
  } catch (err) {
    res.send(err)
  }
}

exports.logout = (req, res) => {
  const name = req.params.name

  res.status(200).json({
    status: 'logout successfully',
  })
}
