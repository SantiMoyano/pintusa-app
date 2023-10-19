class Canvas {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext("2d");
    this.canvas.width = canvasElement.width;
    this.canvas.height = canvasElement.height;
  }

  initCanvas() {
    this.ctx.strokeStyle = "#000000";
    this.ctx.lineWidth = 10;
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
  }

  drawLine(x1, y1) {
    this.ctx.beginPath();
    this.ctx.lineTo(x1, y1);
    this.ctx.stroke();
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default Canvas;
