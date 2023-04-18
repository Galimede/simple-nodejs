'use strict'

const http = require('http')

const server = http.createServer((req, res) => {
  res.end(`Answered to "${req.url} with love."`)
})

server.listen(process.env.PORT)
