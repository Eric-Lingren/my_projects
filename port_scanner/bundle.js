(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
const net = require('net');
let host = '192.168.0.30'

let startingPort = 1;
let endingPort = 10000;
let timeout = 2000;
let output = document.getElementById('output')

while (startingPort <= endingPort) {
    let port = startingPort;
    
    (function(port) {
        
        var socket = new net.Socket();
        
        socket.setTimeout(timeout, function() { socket.destroy(); });
        socket.connect(port, host, function() {
            console.log('OPEN: ' + port);
            output.innerHTML = port
        });

        socket.on('data', function(data) {
            console.log(port + ': ' + data);
            socket.destroy();
        });
        
        socket.on('error', function(e) {
            socket.destroy();
        });
    })(port);
    
    startingPort++;
}


},{"net":1}]},{},[2]);
