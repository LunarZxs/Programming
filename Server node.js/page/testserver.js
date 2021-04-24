import {createReadStream, fstat} from 'fs'
import {createWriteStream} from 'fs'
import express from 'express'

const app = express()

//var writeStram = createWriteStream('./writeFromStream')

app.get('/home', (req, res) => {
    //res is writable stream to write data to the client
    console.log('request made to: ' + req.url)

   res.writeHead(200, {'Content-Type': 'text/html'})
   createReadStream('index.html').pipe(res)

  
})

app.get('/:id', (req, res) => {
    //res is writable stream to write data to the client
    console.log('request made to: ' + req.url)
   
        res.writeHead(200, {'Content-Type': 'text/html'})
        createReadStream('contact.html').pipe(res)
})

console.log('listening to port 3000')
app.listen(3000)