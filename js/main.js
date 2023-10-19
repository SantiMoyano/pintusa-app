import Canvas from "./Canvas.js";
import Pencil from "./Pencil.js";

const canvasElement = document.querySelector("#canvas");

// Create a new pencil and canvas
const pencil = new Pencil();
const canvas = new Canvas(canvasElement, pencil);

// Draw on canvas
canvasElement.addEventListener("mousedown", function (e) {
  canvas.setInitialXYLine(e.offsetX, e.offsetY);
  canvasElement.addEventListener("mousemove", mouseMoving);
});

const mouseMoving = (e) => {
  canvas.drawLine(e.offsetX, e.offsetY);
};

canvasElement.addEventListener("mouseup", function () {
  canvasElement.removeEventListener("mousemove", mouseMoving);
});
