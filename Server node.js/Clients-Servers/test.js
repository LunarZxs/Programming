import { createServer } from 'http'
import { createReadStream } from 'fs'


var server = createServer(function(req, res){
    
    //creates a stream to read data
    var myStream = createReadStream(__dirname + '/writeMe.txt', 'utf-8')
    
    myStream.on('data', function(chunk){
    console.log(chunk)
    res.end(chunk)
})

myStream.on('error', function(err) {
    res.end(err);
  });
})
 
server.listen(4000, '127.0.0.1')