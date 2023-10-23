import Canvas from "./Canvas.js";
import Pencil from "./Pencil.js";
import { uploadImage } from "./imageUploader.js";
import { saveImage } from "./saveImage.js";

let canvasElement = document.querySelector("#canvas");
const canvasClear = document.querySelector("#clear-canvas");
const eraserTool = document.querySelector("#eraser");
const pencilTool = document.querySelector("#pencil");
const colorTool = document.querySelector("#color");
const lineWidthTool = document.querySelector("#lineWidth");
let selectedImage = document.querySelector("#file-input");
let saveImg = document.querySelector("#save-img");

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

// Clear canvas
canvasClear.addEventListener("mousedown", function () {
  canvas.clearCanvas();
});

// Use eraser
eraserTool.addEventListener("mousedown", function () {
  pencil.setGrosor(50);
  pencil.setColor("#fff");
  canvas.initPencil();
});

// Use pencil
pencilTool.addEventListener("mousedown", function () {
  pencil.setGrosor(10);
  pencil.setColor("#000");
  canvas.initPencil();
});

// Change color
colorTool.addEventListener("input", function (e) {
  pencil.setColor(e.target.value);
  canvas.initPencil();
});

// Set line width
lineWidthTool.addEventListener("change", function (e) {
  pencil.setGrosor(e.target.value * 10);
  canvas.initPencil();
});

// Selected buttons
pencilTool.addEventListener("click", function () {
  pencilTool.classList.add("selected");
  eraserTool.classList.remove("selected");
});

eraserTool.addEventListener("click", function () {
  eraserTool.classList.add("selected");
  pencilTool.classList.remove("selected");
});

// selectImage

selectedImage.addEventListener("change", () => {
  uploadImage(canvas, canvasElement, selectedImage);
});

saveImg.addEventListener("click", () => {
  saveImage(canvasElement);
});
