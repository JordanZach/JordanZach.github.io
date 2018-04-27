///*
// Connect to the server
var socket = io();

var username = prompt('Choose a username: ');
socket.emit('new user', username);

socket.on('new message', function(msg) {
    addMessage('<p><span class="username">' + msg.sender + ': </span>' + msg.message + '</p>');
});

socket.on('new user', function(username) {
    addMessage('<p class="join">' + username + ' has joined the room</p>');
});

socket.on('user left', function (username) {
    addMessage('<p class="leave">' + username + ' has left the room</p>');
})
/*
function addMessage(msg) {
    var messages = document.getElementById('messages');
    messages.innerHTML += msg;
    messages.scrollTop = messages.scrollHeight;
}

function postMessage() {
    var textBox = document.getElementById('message');
    socket.emit('new message', {sender: username, message: textBox.value});
    textBox.value = '';
}






/* This function is called once, when the page loads. Anything that you want to show up initially should be created here! To start out, try drawing some shapes. */


function setup() {
    createCanvas(windowWidth -50, windowHeight -2)
    background(240, 240, 240)

}

//variables

var xred =0;
var xblue =0;
var yred =520;
var yblue =625;
var randomNum = Math.floor(Math.random() * 10);



/* This function is called over and over again by P5. Animation should happen here! */
function draw() {
background("lightblue")
    //house 1
    fill(205, 4, 0);
    triangle(400,400,480,400,440,330);
    fill("lightgrey");
    rect(400, 400, 80, 80);
    fill(0, 0, 0);
    rect(426, 440, 30, 100);

    //house 2
    
        fill(205, 4, 0);
    triangle(700,400,780,400,740,330);
    fill("white");
    rect(700, 400, 80, 80);
    fill(0, 0, 0);
    rect(726, 440, 30, 100);

    //house 3
    
    fill(205, 4, 0);
    triangle(1000,400,1080,400,1040,330);
    fill(225, 204, 0);
    rect(1000, 400, 80, 80);
    fill(0, 0, 0);
    rect(1026, 440, 30, 100);
    
    //road
   //     fill(0, 0, 0);

    rect(0, 480, 8000, 280);

    //yellow lines
            fill(225, 204, 0);
            rect(0, 570, 30, 7.5);
            rect(50, 570, 30, 7.5);
            rect(100, 570, 30, 7.5);
            rect(150, 570, 30, 7.5);
            rect(200, 570, 30, 7.5);
            rect(250, 570, 30, 7.5);
            rect(300, 570, 30, 7.5);
            rect(350, 570, 30, 7.5);
            rect(400, 570, 30, 7.5);
            rect(450, 570, 30, 7.5);
            rect(500, 570, 30, 7.5);
            rect(550, 570, 30, 7.5);
            rect(600, 570, 30, 7.5);
            rect(650, 570, 30, 7.5);
            rect(700, 570, 30, 7.5);    
            rect(750, 570, 30, 7.5);
            rect(800, 570, 30, 7.5);
            rect(850, 570, 30, 7.5);
            rect(900, 570, 30, 7.5);
            rect(950, 570, 30, 7.5);
            rect(1000, 570, 30, 7.5);
            rect(1050, 570, 30, 7.5);
            rect(1100, 570, 30, 7.5);
            rect(1150, 570, 30, 7.5);
            rect(1200, 570, 30, 7.5);
            rect(1250, 570, 30, 7.5);
            rect(1300, 570, 30, 7.5);
            rect(1350, 570, 30, 7.5);
            rect(1400, 570, 30, 7.5);

    //moving circles
    
    fill("red")
    ellipse(xred,yred,60,35);
    
    fill("blue")
        ellipse(xblue,yblue,60,35);
    
    
    
                
if (xred > 1300) {
    alert( username + " Wins!")
    xred = 0;
    xblue = 0;
}
else if( xblue > 1300) {
    alert( username + " Wins!")
    xred = 0;
    xblue = 0;
    
}
console.log(xred)
console.log(xblue)
}

function keyPressed() {
        
        if (keyCode ===    86) {
        xred += 25;

        } 
        else if (keyCode === 66) {
        xblue += 25;
        } 
        
        var infoToSend = { xBlue: xblue, xRed: xred }
    
    
    
    socket.emit("circle move",infoToSend)
        
}
    

socket.on("circle move",function(info) {

    xred = info.xRed
    xblue = info.xBlue
})
