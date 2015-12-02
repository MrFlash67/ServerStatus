/**
 * Created by MrFlash67 on 27/11/15.
 */
var http = require('http');
var a;
//var req = http.request({method: 'HEAD', host: 'muute.net', port: 80, path: '/'}, function(res) {
//	console.log(res.statusCode);
//	console.log(res.headers);
//});
//req.end();

var getHTTPStatus = function(address) {
	var req = http.request({method: 'HEAD', host: address, port: 80, path: '/'}, function(res) {
		 a = res.statusCode;
		console.log(1);
		console.log(a);
		//console.log(res.statusCode);
		//console.log(res.headers);
		callback();
	});
	req.end();
	console.log(2);
	console.log(a);
	return a
}

console.log(3);
console.log(getHTTPStatus('muute.net', function(){a = res.statusCode}));

//var  = http.createServer(function(req, res) {
//	console.log("server running");
//
//});
//server.listen(8081);
