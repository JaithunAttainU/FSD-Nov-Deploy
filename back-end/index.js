const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 8000

// app.use(cors({
//   origin: 'http://localhost:3000'
// }))

app.use(cors())
app.get('/api/products', (req, res) => {
  res.send(products)
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
