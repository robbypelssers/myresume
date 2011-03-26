var http = require('http'), 
    sys = require('sys'),
    fs = require('fs');

var server = http.createServer(function(request,response) {
	response.writeHead(200, {
		'Content-Type': 'text/html'
	});
	
	var rs = fs.createReadStream(__dirname + '/static/html/index.html');
	sys.pump(rs, response);
});
server.listen(8080);