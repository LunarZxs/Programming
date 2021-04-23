var http = require('http')
var fs = require('fs')


var server = http.createServer(function(req, res){
    
    //creates a stream to read data
    var myStream = fs.createReadStream(__dirname + '/writeMe.txt', 'utf-8')
    
    myStream.on('data', function(chunk){
    console.log(chunk)
    res.end(chunk)
})

myStream.on('error', function(err) {
    res.end(err);
  });
})
 
server.listen(4000, '127.0.0.1')