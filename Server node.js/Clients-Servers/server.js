var http = require('http')

//req is a request of details made to server and res is a response back to the client 
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url)
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World')
})

server.listen(3000, '127.0.0.1')

console.log('Hello to the world listening to port 3000')