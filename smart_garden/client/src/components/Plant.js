import React, {Component} from 'react';
// const SerialPort = require('serialport');
// const Readline = require('@serialport/parser-readline');

// const port = new SerialPort('/dev/cu.usbmodem141401', {baudRate: 9600});
// const parser = port.pipe(new Readline({ delimiter: '\n' }));

// console.log(SerialPort)

// port.on('open', () => {
//     console.log('serial port opened')
// });

// // port.on('data', data => {
// //     console.log(data.toString('utf8'))
// // });
// parser.on('data', data =>{
//     console.log('light is:', data);

//   });



class Plant extends Component {
    constructor(){
        super()
        this.state = {
            lightData: [1,2,3,4,5]
        }
    }
    
    render() {

    return(
        <div>
            Light Data:
            {this.state.lightData}
        </div>
    )
    }
}

export default Plant