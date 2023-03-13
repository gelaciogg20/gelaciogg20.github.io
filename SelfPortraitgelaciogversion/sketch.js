let megadeth1

function preload(){
  megadeth1 = createImg('megadeth.jpg', "album cover");
  megadeth1.position(150,290);
  megadeth1.size(100,100);
}

let faceWidth;
let faceHeight;
let faceX;
let faceY;
let eyeY;
let eyeX; 

function setup() {
  createCanvas(400, 400); 
  
  //face variables 
  faceWidth = width * 90/ 400;
  faceHeight = height * 90/ 400;
  faceX = width * 200 / 400; 
  faceY = height * 180 / 400;
  let eyeX = width * 20 / 400; 
  let eyeY = height * 180 / 400;
  
  
  
}

function draw() {
  //pink background color
  background(107,0,195);
  
  //Face
  fill(240,190,140);
ellipse(faceX,faceY,faceWidth,faceHeight);
  
  
  //HairLeftSide
fill(0);
strokeWeight(2);
beginShape();
vertex(faceX - (width*5/400),height*135/400);
vertex(faceX,height*155/400);
quadraticVertex(130,160,170,275);
vertex(135,275)
quadraticVertex(130,135,195,135)
endShape();
  
  
  //HairRightSide
fill(0);
strokeWeight(2);
beginShape();
vertex(width*200/400,height*135/400);
vertex(width*205/400,height*155/400);
quadraticVertex(270,160,225,275);
vertex(width*255/400,height*275/400)
quadraticVertex(290,135,205,135);
endShape();
  
  
 //beard
  fill(79,65,0);
  beginShape();
  curveVertex(width*155/400,height*215/400);
  curveVertex(width*155/400,height*190/400);
  curveVertex(width*185/400,height*215/400);
  curveVertex(width*215/400,height*215/400);
  curveVertex(width*245/400,height*190/400);
  curveVertex(width*245/400,height*215/400);
  curveVertex(width*230/400,height*250/400);
  curveVertex(width*170/400,height*250/400);
  curveVertex(width*155/400,height*215/400);
  curveVertex(width*155/400,height*190/400);
  curveVertex(width*185/400,height*215/400);
  endShape();
  
    //nose
  fill(240,190,140);
  beginShape();
  curveVertex(faceX - (width*5/400),height*197/400);
  curveVertex(faceX - (width*5/400),height*197/400);
  curveVertex(faceX - (width*5/400),height*205/400);
  curveVertex(faceX + (width*5/400),height*205/400);
  curveVertex(faceX + (width*5/400),height*197/400);
  curveVertex(faceX + (width*5/400),height*197/400);
  endShape();
  
  //mouth
  // fill(0);
  noFill();
  // ellipse(200,230,10,10);
  // ellipse(200,200,70,70);
  arc(200,195,70,70, PI/2 - .5,PI/2 + .5);
  
  
  //eyes
  fill(255);
  ellipse(faceX-20*width/400,faceY,15,10);
  ellipse(faceX+20*width/400, faceY, 15,10);
  
  // irises
  fill(0,0,255);
  ellipse(faceX-20*width/400, faceY, 5,5);
  ellipse(faceX+20*width/400, faceY, 5,5);
  
  //pupils
  fill(0);
  ellipse(faceX-20*width/400, faceY, 2,2);
  ellipse(faceX+20*width/400, faceY, 2,2);
  
  //concatenation uses the plus sign but doesn't, instead sticks values end-to-end
  // console.log(mouseX + ", " + mouseY);
  //Neck
  fill(240,190,140);
  beginShape();
  vertex(width*220/400,height*255/400);
  vertex(width*220/400,height*300/400);
  vertex(width*180/400,height*300/400);
  vertex(width*180/400,height*255/400);
  endShape();
  //Shirt
  fill(230,229,235);
  beginShape();
  vertex(width*135/400,height*280/400);
  quadraticVertex(100,280,100,400);
  vertex(width*135/400,height*400/400);
  vertex(width*135/400,height*280/400);
  vertex(width*175/400,height*280/400);
    quadraticVertex(200,310,225,280);
  vertex(width*225/400,height*280/400);
  vertex(width*260/400,height*280/400);
    quadraticVertex(300,280,300,400);
   vertex(width*260/400,height*400/400); 
  vertex(width*260/400,height*280/400);
  endShape();
  beginShape();
  vertex(width*135/400,height*280/400);
  vertex(width*260/400,height*280/400);
  vertex(width*260/400,height*400/400);
  vertex(width*135/400,height*400/400);
  vertex(width*135/400,height*280/400);
  endShape();
  
  
  
  
  
  
}