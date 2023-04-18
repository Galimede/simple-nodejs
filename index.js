'use strict'

const http = require('http')

const server = http.createServer((req, res) => {
  res.end(`Answered to "${req.url}"`)
})

server.listen(process.env.PORT)
