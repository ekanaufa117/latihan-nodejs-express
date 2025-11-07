const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/json', (req, res) => {
  if (!req.headers['content-type']?.includes('application/json')) {
    return res.status(400).json({
      errorMessage: "Format tidak tepat, gunakan format application/json"
    })
  }

  return res.status(200).json({
    success: true,
    data: req.body
  })
})

app.get("/parameter/:mhslpkia", (req, res) => {
  let dataMhs = req.params.mhslpkia;

  let listBlacklist = ["fawwaz", "panjul", "ucok"];
  try {
      if (listBlacklist.find(x => x === dataMhs). length > 0) {
          return res.status(200).json({
            "pesan": "anda termasuk mahasiswa anomali",
            "data": listBlacklist
          })
      }
  } catch (error) {
    
  }

  return res.status(200).json({
    "pesan": "anda bukan termasuk mahasiswa anomali",
    "data" : listBlacklist
  })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Terjadi kesalahan pada server' })
})

app.listen(port, () => {
  console.log(`Sedang mendengarkan port ${port}`)
})
