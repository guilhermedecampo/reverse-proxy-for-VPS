var http = require('http'),
    httpProxy = require('http-proxy');

//
// Just set up your options...
//
var options = {
  router: {
    'www.drinkzy.com': '127.0.0.1:3000',
    'www.guilhermedecampo.com': '127.0.0.1:4000',
  }
}

//
// ...and then pass them in when you create your proxy.
//
var proxyServer = httpProxy.createServer(options).listen(80);