const express = require('express')
require('./Models')
const app = express()
const cors = require('cors')

const carOptions = {
  origin: 'https://localhost:3000',
}

//midllewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(carOptions))

//routes

const router = require('./Routes/userRoutes')
const bookRoutes = require('./Routes/bookRoutes')
const adminRoutes = require('./Routes/adminRoutes')

app.use('/', router)
app.use('/', bookRoutes)
app.use('/', adminRoutes)

//testing apis

// app.get('/', (req, res) => {
//   res.json({ message: 'hello frsiom server' })
// })

const PORT = 3000
app.listen(PORT, () => {
  console.log('server started on port number 3000')
})
