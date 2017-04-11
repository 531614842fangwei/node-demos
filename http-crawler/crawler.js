var http = require('http');
// var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/9';

// function filterChapters(html){
//     var $ = cheerio.load(html);
//     var courseData = [];
//     var chapters = $('.chapter.chapter-active');
//     chapters.each(function(item){
//         var $chapter = $(this);
//         var chapterTitle = $($chapter.find('h3>strong')[0]).text().replace(/\s+/g,'');
//         var $videos = $chapter.find('.video').children('li');
//         var videos = [];
//         $videos.each(function(){
//             var $video = $(this).find('a');
//             var videoTitle = $video.text().replace(/\s+/g,'').replace('开始学习','');
//             var id = $video.attr('data-media-id');
//             videos.push({
//                 videoTitle:videoTitle,
//                 id:id
//             });
//         });
//
//         var chapterData = {
//             chapterTitle : chapterTitle ,
//             videos:videos
//         }
//         courseData.push(chapterData);
//     });
//     return courseData;
// }
//
// function printCourseData(courseData){
//     courseData.forEach(function(item){
//         console.log(item.chapterTitle+'\n');
//         item.videos.forEach(function(videoItem){
//             console.log('\t'+videoItem.videoTitle+'\n');
//         });
//     });
// }

var html = '';
http.get(url,function(res){
    res.on('data',function(data){
        html += data;
    })
    //     .on('end',function(){
    //     var courseData = filterChapters(html);
    //     printCourseData(courseData);
    //     // console.log(html);
    //     // console.log(courseData);
    // })
    //     .on('error',function(){
    //     console.log("获取课程出错");
    // });
});
var server = http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text-plain'});

    res.end(html);
});
server.listen(1337,'127.0.0.1');
console.log('Server runnig at http://127.0.0.1/1337');