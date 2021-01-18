let kirby;
let ppng;
let bpng;
let kpng;
let dpng;
let pipes = [];
let sNum = 0;
let coin;


function preload() {
  ppng = loadImage('pipe.png')
  bpng = loadImage('background.png')
  kpng = loadImage('Kirby.Png')
  dpng = loadImage('doublepipe.png')
  khpng = loadImage('Kirby-hand-up.png(2).png')
  skpng = loadImage('verysadkirby.png')
}

function setup() {
  createCanvas(650, 750);
  kirby = new Kirby();
  pipes.push(new Pipe());
}


function draw() {
  if (sNum === 0) {
    intro();
  } else if (sNum === 1) {
    game();
  }else if (sNum === 2) {
    end();
  }
}



  function intro() {
    background(50, 50, 50);
    let cbl = color(0,0,0);
    let c = color(242,150,241);
    let cw = color(201,255,255);
    let cr = color(255,107,110)
       textSize(75);
      fill (cbl);
     text(" Kirby's Adventure", 15, 85);
       textSize(76);
      fill(c);
     text(" Kirby's Adventure", 20, 75);
    image(khpng,230,200,200,200)
       textSize(50);
      fill (cbl);
    text("Player 1 Start!", 155, 510);
       textSize(51);
      fill(cw);
    text("Player 1 Start!", 160, 500);
        textSize(50);
      fill (cbl);
    text("Press    to Begin", 135, 610);
       textSize(51);
      fill(cw);
    text("Press    to Begin", 140, 600);
      textSize(50);
      fill (cbl);
    text("P", 275, 610);
       textSize(51);
      fill(cr);
    text("P", 280, 600);
  }

  function game() {
    background(bpng);
    kirby.show();
    kirby.move();
   
 
    if (frameCount % 150 == 0) {
      pipes.push(new Pipe());
    }



    for (var i = pipes.length - 1; i >= 0; i--) {
      for (let p of pipes);
      pipes[i].show();
      pipes[i].update();
      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
      if (kirby.hits(pipes[i])) {
        console.log('Game Over');
        pipes.splice(i,1);
        sNum = 2;
       // noLoop();
      }
      if (kirby.bonks(pipes[i])) {
        console.log('Game Over');
        pipes.splice(i,1);
        sNum = 2;
        //noLoop();
      }
      // if (pipes[i].hits(kirby)) {
      //  console.log ('Game over'); 
      //  noLoop();
      // }

    }
  }

function end() {
  background (50,50,50);
      let cbl = color(0,0,0);
    let cp = color(242,150,241);
    let cw = color(221,255,255);
    let cr = color(255,107,110);
    let cb = color(120,255,255);
  image(skpng, 190,250, 250 ,250);
  textSize(75);
    fill (cbl);
     text(" Oh No!", 150, 85);
       textSize(76);
      fill(cw);
     text(" Oh No!", 155, 75);
      textSize(75);
       fill(cbl);
      text("You", 130,195);
       textSize(76);
       fill(cw);
      text("You", 135,185);
         fill(cbl);
      text("Lost!", 285,195);
       textSize(76);
       fill(cr);
      text("Lost!", 295,185);
    textSize(75);
       fill(cbl);
      text("Press R to Return", 10,615);
       textSize(76);
       fill(cw);
      text("Press R to Return", 15,605);
    textSize(76);
       fill(cb);
      text(" R ", 210,605);
     //    fill(cb);
     // text("Lost!", 285,615);
     //  textSize(76);
      // fill(cr);
     // text("Lost!", 295,605);
}

  function keyPressed() {
     for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();}
    
    if (key == ' ') {
      kirby.jump();
    } else if (key=='p'){
      sNum = 1;
      frameCount = 0;
      kirby.y = 750;
    } else if (key == 'r') {
    pipes.splice(i,1);
    frameCount = 0;
    kirby.y = 750;
    sNum = 0;
   }

  }