const net = require('net');
let host = '192.168.0.30'
console.log(net.Socket)

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

