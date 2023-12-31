class Canvas {
  constructor(canvas, pencil) {
    this.canvas = canvas;
    this.pencil = pencil;
    this.ctx = canvas.getContext("2d");
    this.canvas.width = canvas.width;
    this.canvas.height = canvas.height;
    this.initPencil();
  }

  initPencil() {
    this.ctx.strokeStyle = this.pencil.color;
    this.ctx.lineWidth = this.pencil.grosor;
    this.ctx.lineCap = this.pencil.lineCap;
    this.ctx.lineJoin = this.pencil.lineJoin;
  }

  setInitialXYLine(initialX, initialY) {
    this.initialX = initialX;
    this.initialY = initialY;
  }

  drawLine(x1, y1) {
    this.ctx.beginPath();
    this.ctx.moveTo(this.initialX, this.initialY);
    this.ctx.lineTo(x1, y1);
    this.ctx.stroke();
    this.setInitialXYLine(x1, y1);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawImageOnCanvas(img) {
    this.ctx.drawImage(img, 0, 0);
  }

  setCanvasWidth(width) {
    this.canvas.width = width;
  }

  setCanvasHeight(height) {
    this.canvas.height = height;
  }
}

export default Canvas;
