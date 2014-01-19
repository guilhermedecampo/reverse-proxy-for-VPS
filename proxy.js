var http = require('http'),
    httpProxy = require('http-proxy');


// Setting up...

var options = {	
  router: {
    'www.drinkzy.com' : '192.241.224.223:3000',
    'drinkzy.com' : '192.241.224.223:3000',
    'www.guilhermedecampo.com' : '192.241.224.223:1500',
    'guilhermedecampo.com' : '192.241.224.223:1500',
    'elainefabri.com.br': '192.241.224.223:1355',
  }
}

//
// ...and then pass them in when you create your proxy.
//
var proxyServer = httpProxy.createServer(options).listen(80);

