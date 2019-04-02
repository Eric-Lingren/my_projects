

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

let gravity = 1;
let friction = 0.9;

// Event Listeners
addEventListener('mousemove', function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

addEventListener('click', function(){
    init();
});

// Objects
function Ball(x, y, dy, dx, radius, color) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.dx = dx;
    this.radius = radius;
    this.color = color;
}

Object.prototype.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
};

Object.prototype.update = function () {
    if((this.y + this.radius + this.dy) > canvas.height ){
        this.dy = -this.dy * friction;
    } else{
        this.dy += gravity;
    }
    if(this.x + this.radius + this.dx > canvas.width || this.x - this.radius  <= 0){
        this.dx = -this.dx;
    }


    this.y += this.dy;
    this.x += this.dx;
    this.draw();
};

// Implementation
var objects = void 0;
var ball;
let ballArray;

function init() {
   ballArray=[]
    for (var i = 0; i < 400; i++) {
        var radius = randomIntFromRange(10, 40);
        var x = Math.floor(Math.random() * (canvas.width));
        var y = Math.floor(Math.random() * (canvas.height - radius));
        let dx = randomIntFromRange(-2, 2);
        let dy = randomIntFromRange(-2, 2);
        let color = randomColor(colors)
        ballArray.push(new Ball(x, y, dy, dx, radius, color));
    }
    
    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < ballArray.length; i++){
        ballArray[i].update();
    }
    
}

init();
animate();



/***/ 
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */


function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
    var xDist = x2 - x1;
    var yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}


