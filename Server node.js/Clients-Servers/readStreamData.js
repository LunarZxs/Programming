import { createReadStream } from 'fs'
import express from 'express'

const app = express()

var readStream = createReadStream('./writeMe.txt')

app.get('/', (req, res) => {

    //much easier way to write data to the client side
    readStream.pipe(res)

  
    //This stops parsing of the data
    setTimeout(() => {
        readStream.unpipe(res)
        res.status(200).send()
    }, 10)
})

app.listen(3030, '127.0.0.1')