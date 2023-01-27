const express = require( 'express')
const cors = require('cors');

const app = express()
const router = express.Router()
const port = process.env.PORT

const imagesRouter = require('./routes/images.js')

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/images', imagesRouter);


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

module.exports = app;