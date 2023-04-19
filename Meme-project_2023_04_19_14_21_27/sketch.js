let faceWidth;
let faceHeight;
let faceX;
let faceY;
let eyeY;
let eyeX; 
let sweat;


function setup() {
  createCanvas(400,400);
  
  sweat = new Sweatdrop (209,125);
  
  
}

function draw() {
  
  lookAmt = map(mouseX, 0 ,height, -4,4,1)
  
  
  background(0,152,230);
  faceWidth = width * 110/ 400;
  faceHeight = height * 110/ 400;
  faceX = width * 200 / 400; 
  faceY = height * 180 / 400;
  let eyeX = width * 20 / 400; 
  let eyeY = height * 180 / 400;
  
  
  
  
  fill(240,190,140);
ellipse(faceX,faceY,faceWidth,faceHeight);
  
  //Monkey side
 fill(224,98,87);
  beginShape();
  vertex(width*210/400,height*120/400);
  quadraticVertex(width*70/400,height*140/400,width*180/400,height*240/400); 
  vertex(width*210/400,height*240/400);
 endShape();
  //eye
  fill(255);
  ellipse(width*220/400,height*160/400,width*15/400,height*15/400);
  ellipse(width*250/400,height*160/400,width*15/400,height*15/400);
  

  //pupils
  fill(0);
  ellipse(220+lookAmt*width/400,height*160/400,width*7/400,height*7/400);
  ellipse(250+lookAmt*width/400,height*160/400,width*7/400,height*7/400);
  
  //nose 
  ellipse(width*255/400,height*189/400,width*15/400,height*15/400);
  line(width*234/400,height*160/400,width*255/400,height*189/400);
  
 //mouth
  line(width*220/400,height*210/400,width*246/400,height*210/400);
  line(width*220/400,height*211/400,width*246/400,height*211/400);
  line(width*220/400,height*212/400,width*246/400,height*212/400);
  //side
  fill(110,250,136);
  beginShape()
  vertex(width*165/400,height*400/400);
  vertex(width*165/400,height*270/400);
  quadraticVertex(width*165/400,height*220/400,width*240/400,height*240/400);
  quadraticVertex(width*240/400,height*390/400,width*240/400,height*400/400);
  endShape();
  //shoulder
  beginShape();
  vertex(width*180/400,height*400/400);
  quadraticVertex(width*180/400,height*250/400,width*220/400,height*240/400);
  vertex(width*220/400,height*400/400)
  endShape();
  
  sweat.drop();
  
  
  console.log(mouseX + "," + mouseY);
}

class Sweatdrop{
  constructor(x,y,d){
    this.x = x;
    this.y = y;
    this.alpha = 255;
     }
  drop(){
    this.y++;
    this.alpha -= 2;
    push();
    stroke(0,0,0,this.alpha);
    fill(0,229,255, this.alpha);
    ellipse(this.x,this.y,10,30);
    pop();
  }




}


