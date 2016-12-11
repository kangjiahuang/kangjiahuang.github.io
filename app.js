var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
var http = require('http');
var site = 'https://www.zhihu.com';

var options = {
  method: 'GET',
  uri: 'https://www.zhihu.com/search',
  qs: {
    type: 'content',
    q: 'the butterfly effect'
  }
};
// 網址, callback
var server = http.createServer(function (req, res) {
    // req 是本地端請求的訊息
    // res 是主機回傳到本地端的訊息
    request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
   // console.log(body) // Show the HTML for the Google homepage.
    
      var $ = cheerio.load(body);

    var $title = $('a.js-title-link');

    var result = [];

    for(var i=0; i<$title.length; i++) {
      var item = {
        title: $($title[i]).text(),
        link: site + $($title[i]).attr('href')
      }

      // var str = $($title[i]).text();
      // var url = site + $($title[i]).attr('href');
      console.log(item);
      // console.log(url);

      result.push(item);
    }

    var str = JSON.stringify(result, null, 4);
    // 將result存成 JSON 檔

    fs.writeFile('result.json', str, 'utf8' ,function (err){
        if (err) {
            console.log('存档失败');
            return;
        }
        console.log('存档完成');
    });
  }
})
var filename = __dirname + '\\result.json';
    fs.readFile(filename, 'utf8',function (err,content){
        if (err){
            res.writeHead(404,{'content-type':'text/html'});
            res.end();
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(content,'utf8');
    console.log(content);
    res.end();
    })
    
})
server.listen(12345);

