var http = require('http'),
    httpProxy = require('../../lib/node-http-proxy');


// Setting up...

var options = {	
  router: {
    'www.drinkzy.com' : '192.241.224.223:3000',
    'www.guilhermedecampo.com' : '192.241.224.223:1500',
  }
}

//
// ...and then pass them in when you create your proxy.
//
var proxyServer = httpProxy.createServer(options).listen(80);

