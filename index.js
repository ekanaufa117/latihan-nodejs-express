const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/post', (req, res) => {
  res.send('KEKW!')
})

app.put('/put', (req, res) => {
  res.send('PuTTy!')
})

app.patch('/patch', (req, res) => {
  res.send('putch!')
})

app.delete('/delete', (req, res) => {
  res.send('bye!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
