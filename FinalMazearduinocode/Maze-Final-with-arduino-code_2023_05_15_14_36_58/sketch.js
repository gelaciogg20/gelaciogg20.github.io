//may not work on safari
// Declare a "SerialPort" object
var serial;

// fill in the name of your serial port here:
//copy this from the serial control app
var portName = "/dev/tty.usbmodem11301";

//this array will hold transmitted data
var inMessage = 0;
let playerSize = 10;
let prevpadX = false;

let gp;
let gpIndex;
let gpConnected = false;
let endTime;
let gameActive = true;

let soundFile 
let img;
let img2;
function preload() {
  img = loadImage('maze.jpg');
  img2 = loadImage('Nightmare.jpg')
    soundFormats('mp3');
  soundFile = loadSound('Nobody.mp3');
}












function setup() {
  createCanvas(600,600);
window.addEventListener("gamepadconnected", function(e) {
    gpIndex = e;
    gpConnected = true;
    console.log("Gamepad connected");
  });
    window.addEventListener("gamepaddisconnected", function(f) {
    gpConnected = false;
    console.log("Gamepad disconnected");
  });
}
  // make an instance of the SerialPort object
  serial = new p5.SerialPort();

  // Get a list the ports available
  // You should have a callback defined to see the results. See gotList, below:
  serial.list();

  // Assuming our Arduino is connected,  open the connection to it
  serial.open(portName);

  // When you get a list of serial ports that are available
  serial.on('list');

  // When you some data from the serial port
  serial.on('data', gotData);


// Called when there is data available from the serial port
function gotData() {
  var currentString = serial.readLine();  // read the incoming data
  trim(currentString);            // trim off trailingwhitespace
  if (!currentString) return;     // if the incoming string is empty, do no more
  console.log(currentString);
  inMessage=currentString; //reassign data from local var to global var
}

function draw() {
// console.log(mouseX + "," + mouseY);
  background(225);
  image(img, 0, 0);
  if(gpConnected){
    gp = navigator.getGamepads()[gpIndex.gamepad.index];
    if (gp.buttons[0].pressed && gp.buttons[0] != prevpadX){
    playerSize--;
  }
  prevpadX = gp.buttons[0].pressed;
    let gpX = map(gp.axes[0], -1,1, 0, width);
    let gpY = map(gp.axes[1], -1,1, 0 , height);
     ellipse(gpX, gpY, playerSize);
  playerSize += 0.5;
   // console.log(gp);
// gp.hapticActuators[0].pulse(1.0, 200);
    // img.loadPixels();
    // let imgData =img.get(gpX,gpY, 10,10);
    // console.log(imgData);
    
    let collisionDetected = false;
    for (x = 0; x < playerSize; x++){
      for (y = 0; y < playerSize; y++){
        if(img.get(gpX+x,gpY+y)[0] < 200){
          collisionDetected = true;
        }
      }
    }
    
   if(collisionDetected){
     gameActive = false 
   }
  }
  
  if(!gameActive){
    serial.write("1");
    console.log("1");
    image(img2,0,0,width, height);
      if ( !soundFile.isPlaying()){
          soundFile.play();
        endTime = millis();
        console.log(endTime);
      }
    }
  else{
    serial.write("0");
    soundFile.stop();
}
  
  if(millis()-endTime > 5000){
    gameActive = true;
    console.log("0");
    serial.write("0");
     playerSize = 10;
  }

}