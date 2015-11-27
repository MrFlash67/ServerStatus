/**
 * Created by MrFlash67 on 27/11/15.
 */
var http = require('http');
var url = require('url');

console.log('hey');
var options = {method: 'HEAD', host: 'muute.net', port: 80, path: '/'};

var req = http.request(options, function(res) {
	console.log('yo');
	console.log(res.statusCode);
	console.log(JSON.stringify(res.headers));
});
req.end();

//var  = http.createServer(function(req, res) {
//	console.log("server running");
//
//});
//server.listen(8081);
