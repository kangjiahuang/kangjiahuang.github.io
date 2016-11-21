// 載入 http 的模組
var http = require('http');

var server = http.createServer(function (req, res) {
    // req 是本地端請求的訊息
    // res 是主機回傳到本地端的訊息

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('everybody\n');
    res.write('put your hands up\n');
    var n = 11;
   


   res.write(n+' ');
    res.end();
});

// 監聽 12345 port
server.listen(12345);
console.log('Server running at http://120.125.63.153:12345/');
