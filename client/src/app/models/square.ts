export class Square {
    constructor(private ctx: CanvasRenderingContext2D) {}
  
    draw(x: number, y: number, z: number) {
      this.ctx.fillRect(x - 20 / 2, y - 20 / 2, z, z);
    }
  }