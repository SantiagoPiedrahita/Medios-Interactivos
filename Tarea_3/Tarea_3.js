var x=1
var b=1
var y=0
var t=0

function setup() {
createCanvas(800,400);
}

function draw() {
  background(101, 254, 255);
  noStroke();
//Nube 1
  fill(255,255,255);
  ellipse(x+800,60,50,50);
  ellipse(x+770,70,50,50);
  ellipse(x+740,65,50,50);
//Nube 2  
  ellipse(x+500,90,50,50);
  ellipse(x+470,100,55,55);
  ellipse(x+440,95,50,50);
//Nube 3
  ellipse(x+300,60,50,50);
  ellipse(x+270,70,50,50);
  ellipse(x+240,65,50,50);
//Mar
  fill(0, 138, 131);
  rect(0,300,800,100); 
//Tiburon 1
  fill(165, 178, 191); 
  triangle(t+350,240,t+350,310,t+300,310);     
//Bote
  fill(255,255,255);
  quad(b+1,y+270,b+200,y+270,b+170,y+310,b+1,y+310);
  rect(b+10,y+250,120,50);
  fill(0,0,0)
  quad(b+1,y+275,b+197,y+275,b+188,y+285,b+1,y+285);
//Tiburon 2
  fill(165, 178, 191);
  triangle(t+750,290,t+750,380,t+690,380);
  
  b=b+3
  //y=y + random(-0.5, 0.5);  
  x=x-3 
  t=t-6
//Reset   
 if(t < -800) { 
  t = 600
  }
   if(b > 800) { 
  b = -200
  }
  if(x < -800) { 
  x = 600
  }
}
