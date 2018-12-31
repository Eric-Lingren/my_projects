// var express = require('express'),
//     app = express(),
//     server = require('http').Server(app),
//     io = require('socket.io')(server),
//     port = 8888;

// //Server start
// server.listen(port, () => console.log('on port' + port))

// //user server
// app.use(express.static(__dirname + '/public'));

// io.on('connection', onConnection);

// var connectedSocket = null;
// function onConnection(socket){
//     connectedSocket = socket;
// }



const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');


const serialport = new SerialPort('/dev/cu.usbmodem141101', {baudRate: 9600});
const parser = serialport.pipe(new Readline({ delimiter: '\n' }));

serialport.on('open', () => {
    console.log('serial port opened')
});

// port.on('data', data => {
//     console.log(data.toString('utf8'))
// });

let lightData = []



parser.on('data', data =>{
    lightData.push(data)
    console.log('light data is: ' + lightData)
    // io.emit('data', { data: data });
    
});

// const lightDiv = document.getElementById('lightDiv')
// lightDiv.innerHTML = 'test'