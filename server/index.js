const express = require('express')
const handler = require('./handler.js')
const cors = require('cors')
const app = express()
const port = 3000
//use your middleware for CORS
app.use(cors())
//use the middleware for transforming the data from json to js
app.use(express.json())
app.get('/', handler.mainHandler)

app.get('/api/blogs', handler.getHandler)
app.post('/api/blogs', handler.postHandler)
app.delete('/api/blogs', handler.deleteHandler)

app.get('*', handler.errorHandler) //error handler

app.listen(port, () => {
  console.log(`Express app listening on port http://localhost:${port}`)
})