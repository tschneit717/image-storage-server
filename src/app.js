const express = require('express')

const app = express()
const port = 3333

app.get('/api', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})