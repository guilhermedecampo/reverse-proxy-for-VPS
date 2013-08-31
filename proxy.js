var http = require('http'),
    httpProxy = require('http-proxy');

//
// Just set up your options...
//
var options = {
  router: {
    'localhost:1500/ueba': '127.0.0.1:3000',
    'localhost:1500/nice': '127.0.0.1:4000',
  }
}

//
// ...and then pass them in when you create your proxy.
//
var proxyServer = httpProxy.createServer(options).listen(1500);