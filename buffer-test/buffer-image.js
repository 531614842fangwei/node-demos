/**
 * Created by weifang on 4/12/2017.
 */
var fs = require('fs')

fs.readFile('Koala.jpg',function(err,origin_buffer){
    console.log(Buffer.isBuffer(origin_buffer))
    fs.writeFile('Koala_copy.jpg',origin_buffer,function(err){
        if(err) console.log(err)
    })

    var base64Img = origin_buffer.toString("base64")
    // console.log(base64Img)

    var decodingImg = new Buffer(base64Img,"base64")
    // console.log(decodingImg)

    console.log(Buffer.compare(origin_buffer,decodingImg))

    fs.writeFile("Koala_copy2.jpg",decodingImg,function(err){
        if(err) console.log(err)
    })
})