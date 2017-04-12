var http = require('http')
var fs = require('fs')

http
    .createServer(function(req,res){
        // fs.readFile('Koala.jpg', function(err,origin_buffer) {
        //     console.log(Buffer.isBuffer(origin_buffer))
        //     fs.writeFile('Koala_copy.jpg', origin_buffer, function (err,data) {
        //         if (err) {
        //             console.log(err)
        //         }
        //         else {
        //             res.writeHeader(200,{'Context-type':'text/html'})
        //             res.end(data)
        //
        //         }
        //     })
        // })
        fs.createReadStream('Koala.jpg').pipe(res)
    })
    .listen(1337,'127.0.0.1');