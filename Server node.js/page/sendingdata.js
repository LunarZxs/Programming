import {createReadStream} from 'fs'
import {createWriteStream} from 'fs'
import express from 'express'

const app = express()

//var writeStram = createWriteStream('./writeFromStream')

app.get('/', (req, res) => {
    //res is writable stream to write data to the client
    console.log('request made to: ' + req.url)
    res.writeHead(200, {'Content-Type': 'application/json'})

    var myObj ={
        name: 'Ranul',
        job: 'Team Member',
        age:21
    }

    res.end(JSON.stringify(myObj))
})

app.listen(3000)