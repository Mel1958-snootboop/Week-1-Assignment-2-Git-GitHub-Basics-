console.log('Hello From Node.js');

let myhttp = require('http');

let myserver = myhttp.createServer
  
  (function(myrequest, myresponse) {
  console.log(myrequest.url );

  myresponse.writeHead(200, {'Content-Type': 'text/plain'}
);
myresponse.end("Greetings from my Node.js web server"
);
    
}

);

myserver.listen(80, "0.0.0.0");