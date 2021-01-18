//this.vy affects jumpheight, 0 < 1 = smaller

class Kirby
{
  constructor() {
    this.r = 50;
    this.x = this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 0.9;
  }
  
  jump() {
    this.vy = -12;
  }
  
  hits(pipes) {
    return collideRectRect(this.x, this.y, this.r, this.r, pipes.x, 0 - pipes.top/10 , 100 , pipes.top); }

bonks(pipes) {
   return collideRectRect(pipes.x,  pipes.top + 150, pipes.w, 750 - pipes.top + 20, this.x, this.y, this.r, this.r);}
    
  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0 , height - this.r)
  }
  
  
show() {
   image(kpng,this.x, this.y, this.r, this.r);
  } 
    
} 