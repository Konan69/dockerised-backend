const express = require('express')
const pool = require("./db")
const port = 1337


const app = express()

app.get('/', (req, res) => {
  res.status(200)
})


app.listen(port, () =>console.log( `server has started on port ${port}`))