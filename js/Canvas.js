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

  setInitialXY(initialX, initialY) {
    this.initialX = initialX;
    this.initialY = initialY;
  }

  drawLine(x1, y1) {
    this.ctx.beginPath();
    this.ctx.moveTo(this.initialX, this.initialY);
    this.ctx.lineTo(x1, y1);
    this.ctx.stroke();

    this.initialX = x1;
    this.initialY = y1;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default Canvas;
