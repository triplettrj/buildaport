const http = require('http')

const server = http.createServer((req, resp) => {
	resp.setHeader('Content-Type', 'text/html')
	resp.end('<h1>HEYyoooooo</h1>')
})

server.listen(3000)