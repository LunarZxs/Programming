import {createReadStream} from 'fs'
import {createWriteStream} from 'fs'
import express from 'express'

const app = express()

//var writeStram = createWriteStream('./writeFromStream')

app.get('/', (req, res) => {
    //res is writable stream to write data to the client
    res.writeHead(200, {'Content-Type': 'text/html'})
    var readStream = createReadStream('index.html', 'utf-8')
    readStream.pipe(res)

})

app.listen(3000)