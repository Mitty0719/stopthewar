export class flagSection{
  constructor(){
    this.section = document.querySelector('.flag-section');
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.section.appendChild(this.canvas);

    this.screenRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.resize();
    this.topBlock = new Block(this.stageWidth, this.stageHeight, true);
    this.bottomBlock = new Block(this.stageWidth, this.stageHeight, false);

    this.reqId = requestAnimationFrame(this.animate.bind(this));
  }

  resize(){
    this.stageWidth = window.innerWidth;
    this.stageHeight = window.innerHeight;

    this.canvas.width = this.stageWidth * this.screenRatio;
    this.canvas.height = this.stageHeight * this.screenRatio;
    this.ctx.scale(this.screenRatio, this.screenRatio);
  }

  animate(){
    this.reqId = requestAnimationFrame(this.animate.bind(this));
    this.topBlock.draw(this.ctx);
    this.bottomBlock.draw(this.ctx);

    if(this.topBlock.x === 0 && this.bottomBlock.x === 0){
      cancelAnimationFrame(this.reqId);
    }
  }
}

class Block{
  constructor(stageWidth, stageHeight, isTop){
    this.width = stageWidth;
    this.height = stageHeight / 2;

    if(isTop){
      this.x = this.width;
      this.y = 0;
      this.color = '#005BBB';
      this.vx = -1;
    }else{
      this.x = -this.width;
      this.y = this.height;
      this.color = '#FFD500';
      this.vx = 1;
    }
  }

  draw(ctx){
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
    this.x += this.vx;
    console.log('call');
  }
}