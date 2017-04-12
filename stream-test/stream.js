/**
 * Created by weifang on 4/12/2017.
 */
var fs = require('fs')

var readStream = fs.createReadStream('Wildlife.wmv')
var writeStream = fs.createWriteStream('Wildlife-copy.wmv')

readStream.on('data',function(chunk){
    if (writeStream.write(chunk)) {
        console.log('still cached')
        readStream.pause()
    }
}).on('end',function(){
    writeStream.end()
    console.log('data ends')
})

writeStream.on('drain',function () {
    console.log('data drains')
    readStream.resume()
})

