var http = require('http')
var Promise = require('Promise')
var cheerio = require('cheerio')

var url = 'http://www.imooc.com/learn/9'
var baseUrl = 'http://www.imooc.com/learn/'

function filterChapters(html){
    var $ = cheerio.load(html);
    var courseData = [];
    var chapters = $('.chapter.chapter-active');
    chapters.each(function(item){
        var $chapter = $(this);
        var chapterTitle = $($chapter.find('h3>strong')[0]).text().replace(/\s+/g,'');
        var $videos = $chapter.find('.video').children('li');
        var videos = [];
        $videos.each(function(){
            var $video = $(this).find('a');
            var videoTitle = $video.text().replace(/\s+/g,'').replace('开始学习','');
            var id = $video.attr('data-media-id');
            videos.push({
                videoTitle:videoTitle,
                id:id
            });
        });

        var chapterData = {
            chapterTitle : chapterTitle ,
            videos:videos
        }
        courseData.push(chapterData);
    });
    return courseData;
}

function printCourseData(courseData){
    courseData.forEach(function(item){
        console.log(item.chapterTitle+'\n');
        item.videos.forEach(function(videoItem){
            console.log('\t'+videoItem.videoTitle+'\n');
        });
    });
}

function getPageAsync(url){
    return new Promise(function(resolve,reject){
        console.log('正在爬取...'+url)
        http.get(url,function(res){
            var html = ''
            res
                .on('data',function(data){
                html += data;
                })
                .on('end',function(){
                    resolve(html)
                    // var courseData = filterChapters(html);
                    // printCourseData(courseData);
                })
                .on('error',function(){
                    reject(e)
                    console.log("获取课程出错");
                });
        });
    });
}

var fetchCourseArray = []
videoIds.forEach(function(id){
    fetchCourseArray.push(getPageAsync(baseUrl+id))
})
Promise
    .all(fetchCourseArray)
    .then(function(pages){
        var coursesData = []
        pages.forEach(function(html){
            var courses = filterChapters(html)
            coursesData.push(courses)
        })
    })