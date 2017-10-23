var dimensioneMinore;
var fps=60;

function setup() {
 createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  frameRate(fps);
  
}


function draw() {
  background(100,100,100);
  noStroke();
  if(windowHeight<windowWidth)
  dimensioneMinore=windowHeight;
  else
  dimensioneMinore=windowWidth;
  

  disegnaPizza();
  
  disegnaForchetta("ore");
  disegnaColtello("minuti");
  disegnaMosca("secondi");
  
 // ellipse(width/2,height/2,30);


  
}

function disegnaPizza()
{
  //Piatto
  fill(230);
  ellipse(width/2,height/2+dimensioneMinore*.02,dimensioneMinore*.9);
  fill(245);
  ellipse(width/2,height/2,dimensioneMinore*.9);
  
  //Crostone
  fill(255,181,118);
  ellipse(width/2,height/2+dimensioneMinore*.02,dimensioneMinore*.7);
    fill(255,228,163);
  ellipse(width/2,height/2,dimensioneMinore*.7);
  
  //Salsa
   fill(255,75,65);
  ellipse(width/2,height/2,dimensioneMinore*.6);
  
  //Formaggio
  fill(250);
   ellipse(width/2+dimensioneMinore*.12,height/2+dimensioneMinore*.13,dimensioneMinore*.1);
  ellipse(width/2+dimensioneMinore*.12,height/2-dimensioneMinore*.12,dimensioneMinore*.06);
  ellipse(width/2-dimensioneMinore*.15,height/2+dimensioneMinore*.15,dimensioneMinore*.08);
  ellipse(width/2-dimensioneMinore*.2,height/2+dimensioneMinore*.0,dimensioneMinore*.04);
    ellipse(width/2-dimensioneMinore*.11,height/2-dimensioneMinore*.15,dimensioneMinore*.07);
  
  
}

function disegnaForchetta(tipoLancetta)
{
  var spessore=dimensioneMinore*.025;
  var spessoreRabbi=spessore*2.5;
  var spessoreRabbo=spessore*.5;
  var lunghezza=dimensioneMinore*.20;
  var offset=0.01;
  push();
  
  translate(width/2,height/2+dimensioneMinore*.01);
  rotate(180);
  rotate(rotazione(tipoLancetta));
  fill(90);
  rect(-spessore/2,dimensioneMinore*(.07),spessore,lunghezza,spessore);
 rect(-spessoreRabbi/2,dimensioneMinore*(.05),spessoreRabbi,spessoreRabbi,0,0,spessoreRabbi,spessoreRabbi);
 rect(-spessoreRabbo/2,offset,spessoreRabbo,lunghezza*.3,spessoreRabbo);
  rect(-spessoreRabbi/2,offset,spessoreRabbo,lunghezza*.3,spessoreRabbo);
  rect(spessoreRabbi/2-spessoreRabbo,offset,spessoreRabbo,lunghezza*.3,spessoreRabbo);
  
  translate(-dimensioneMinore*.01,-dimensioneMinore*.01);
  fill(200);
  rect(-spessore/2,dimensioneMinore*.07,spessore,lunghezza,spessore);
  rect(-spessoreRabbi/2,dimensioneMinore*.05,spessoreRabbi,spessoreRabbi,0,0,spessoreRabbi,spessoreRabbi);
  rect(-spessoreRabbo/2,0,spessoreRabbo,lunghezza*.3,spessoreRabbo);
  rect(-spessoreRabbi/2,0,spessoreRabbo,lunghezza*.3,spessoreRabbo);
  rect(spessoreRabbi/2-spessoreRabbo,0,spessoreRabbo,lunghezza*.3,spessoreRabbo);

  pop();
}

function disegnaColtello(tipoLancetta)
{
  var spessore=dimensioneMinore*.025;
  var lunghezza=dimensioneMinore*.26;
  var offset=0.05;
  var seno=abs(sin(frameCount*2.5))*dimensioneMinore*.017;
  push();
  
  translate(width/2,height/2+dimensioneMinore*.01);
  rotate(180);
  rotate(rotazione(tipoLancetta));
  fill(90);
  rect(-spessore/2,dimensioneMinore*(.07)+seno,spessore,lunghezza,spessore);
 rect(-spessore/2,dimensioneMinore*(.03)+seno,spessore*1.7,lunghezza*.6,0,spessore,0,0);

  fill(180);
 translate(-dimensioneMinore*.01,-dimensioneMinore*.01);
  rect(-spessore/2,dimensioneMinore*(.07)+seno,spessore,lunghezza,spessore);
  fill(210);
 rect(-spessore/2,dimensioneMinore*(.03)+seno,spessore*1.7,lunghezza*.6,0,spessore,0,0);


  pop();
}

function disegnaMosca(tipoLancetta)
{
  var dimensione=dimensioneMinore*.03;
  
   push();
  
  translate(width/2,height/2);
  rotate(180);
  rotate(rotazione(tipoLancetta));
  
  //Ombra
  /*fill(100);
  ellipse(0,dimensioneMinore*.4+dimensione*.2,dimensione);
  ellipse(0,dimensioneMinore*.4+dimensione*.8+dimensione*.2,dimensione);
  ellipse(0,dimensioneMinore*.4-dimensione*.8+dimensione*.2,dimensione);*/
  
  fill(5);
  ellipse(0,dimensioneMinore*.4,dimensione);
  
  fill(210,210,230);
  ellipse(0,dimensioneMinore*.4+dimensione*.8,dimensione);
  ellipse(0,dimensioneMinore*.4-dimensione*.8,dimensione);
  

  pop();
}



function rotazione(tipoLancetta)
{
  if(tipoLancetta=="ore")
  {
    return((hour()+(minute()/60))*(360/12));
  }
  else
  if(tipoLancetta=="minuti")
  {
     return((minute()+(second()/60))*(360/60));
  }
  else
  {
   
      return((second())*(360/60));
      
  }
}





function windowResized()
{
	resizeCanvas(windowWidth,windowHeight);
}


