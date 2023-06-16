const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 8000

// app.use(cors({
//   origin: 'http://localhost:3000'
// }))

app.use(cors())
const buildPath = path.join(__dirname, '../front-end/build')

app.use(express.static(buildPath))
app.get('/api/products', (req, res) => {
  res.send(products)
})

app.get('*', (req, res) => {
  res.sendFile(`${buildPath}/index.html`)
})

app.listen(PORT, () => {
  console.log(`Server is started successfully on ${PORT}`)
})

const products = [
  {
    name: 'P1',
    price: 1000
  },
  {
    name: 'P2',
    price: 200
  }
]
