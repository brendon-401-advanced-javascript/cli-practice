'use strict'; 

const io = require('socket.io-client'); 

let host = 'http://localhost:3000'; 

const hubConn = io.connect(host);



