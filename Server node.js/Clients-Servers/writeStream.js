import {createReadStream} from 'fs'
import {createWriteStream} from 'fs'

var readStream = createReadStream('./writeMe.txt', 'utf-8') 
var writeStram = createWriteStream('./writeFromStream')

readStream.on('data', function(data){
    writeStram.write(data)
})