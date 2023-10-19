import Canvas from "./Canvas.js";

const canvasElement = document.querySelector("#canvas");

const canvas = new Canvas(canvasElement);
canvas.initCanvas(canvasElement);

console.log("ÄAAA");

canvasElement.addEventListener("mousedown", function (e) {
  canvas.setInitialXY(e.offsetX, e.offsetY);

  canvasElement.addEventListener("mousemove", mouseMoving);
});

const mouseMoving = (e) => {
  canvas.drawLine(e.offsetX, e.offsetY);
};

canvasElement.addEventListener("mouseup", function (e) {
  canvasElement.removeEventListener("mousemove", mouseMoving);
});
