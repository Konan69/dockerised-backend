const express = require('express')
const pool = require("./db")
const port = 3000


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.post('/', (req, res) => {
  const { name, location } = req.body
  res.status(200).send({
    message: `your keys were ${name}, and ${location}` 
  })
})


app.listen(port, () =>console.log( `server has started on port ${port}`))