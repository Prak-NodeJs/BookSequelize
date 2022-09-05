const { products } = require('./../Models')
const db = require('./../Models')

const Product = db.products

exports.addBooks = async (req, res) => {
  let info = {
    title: req.body.title,

    price: req.body.price,
  }

  const product = await Product.create(info)
  res.send(product)
}

//getAllProducts
