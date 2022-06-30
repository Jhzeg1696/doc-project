export class Square {
    constructor(private ctx: CanvasRenderingContext2D) {}
  
    draw(x: number, y: number, z: number) {
      
      //this.ctx.fillRect(x - 20 / 2, y - 20 / 2, z, z);
      this.ctx.beginPath()
      this.ctx.arc(x , y, 10, 0 , 2 * Math.PI);
      this.ctx.lineWidth = 2
      this.ctx.strokeStyle = "#fa0000"
      this.ctx.stroke()
    }
  }