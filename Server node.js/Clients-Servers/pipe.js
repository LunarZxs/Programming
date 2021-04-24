import {createReadStream} from 'fs'
import {createWriteStream} from 'fs'
import express from 'express'

const app = express()



var readStream = createReadStream('./writeMe.txt') 
var writeStram = createWriteStream('./writeFromStream')

app.get('/', (req, res) => {
    //res is writable stream to write data to the client
    readStream.pipe(res)

})

app.listen(3000, '127.0.0.1')


