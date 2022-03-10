import { distance } from "../util.js";
export class Ball{
  constructor(stageWidth, stageHeight, xRatio, yRatio, radius, color, url){
    this.radius = radius;
    this.holdX = stageWidth * xRatio;
    this.holdY = stageHeight * yRatio;
    this.x = this.holdX;
    this.y = this.holdY;
    this.vy = 0.008;
    this.vx = 0.008;
    this.color = color;


    this.url = url;
  }


  draw(ctx){
    ctx.save();

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  // adjustAcceleration(){
  //   const gapX = this.fx - this.x;
  //   const gapY = this.fy - this.y;
  //   const epsilon = Number.EPSILON;
  //   let directionX = 1;
  //   let directionY = 1;
  //   if(this.x < this.fx){
  //     directionX = 1;
  //   }else{
  //     directionX = -1;
  //   }
  //   if(this.y < this.fy){
  //     directionY = 1;
  //   }else{
  //     directionY = -1;
  //   }

  //   this.vx += this.acc * directionX;
  //   this.vy += this.acc * directionY;
  // }
}