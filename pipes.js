//this.speed works here to change the pipes speed
// the move feature here doesn't work
function Pipe (){


    this.w = 100;
    this.top = random(height / 1.35 + 20);
    this.bottom = (this.top + 50);
    this.u = this.top
    this.r = 100;
    this.x = width;
    this.y = height - this.r;
    this.speed = 3;
    this.top = random(height / 1.3);
    this.bottom = random(this.top - 50);
  

  //move() {
  //this.x -= 20;
  //}

  this.show = function() {
fill(255,50);
    image(dpng, this.x, 0 - this.top / 10 , 100, this.top); 
rect (this.x, 0 - this.top / 10, 100, this.top)

   
      image(dpng, this.x, this.top + 150, 100, 750 - this.top);
        rect(this.x,  this.top + 150, this.w, 750 - this.top + 20);
    

    this.hits = function(kirby) {
    return collideRectRect(pipes.x, 0 - this.top/10 , 100 , pipes.top ,kirby.x, kirby.y, kirby.r, kirby.r );
     }
    this.bonks = function(kirby) {
    return collideRectRect(pipes.x,  pipes.top + 140, pipes.w, 750 - pipes.top - pipes.top / 10, kirby.x, kirby.y, kirby.r, kirby.r);}
    }

 


function resetsketch() {
    kirby = new Kirby();
  pipes.push(new Pipe());
    for (var i = pipes.length-1; i >= 0; i--) 
    for(let p of pipes);
    pipes[i].show();
    pipes[i].update();
    if (pipes[i].offscreen()) {
     pipes.splice(i,1);
    }
}
  
 
  this.update = function() {
    this.x -= this.speed;
  }
  this.offscreen= function () {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
  //this.hits = function(kirby) { 
  //  fill (255);
  //  if (kirby.y < this.top || kirby.y > height - this.bottom) {
    //  if (kirby.x +20 > this.x && kirby.x < this.x + this.w)
    //    return true;
  //  }
  //  return false;
  //}
   
}

