import Canvas from "./Canvas.js";
import Pencil from "./Pencil.js";
import { uploadImage } from "./imageUploader.js";
import { saveImage } from "./saveImage.js";

const canvasElement = document.querySelector("#canvas");
const canvasClear = document.querySelector("#clear-canvas");
const eraserTool = document.querySelector("#eraser");
const pencilTool = document.querySelector("#pencil");
const colorTool = document.querySelector("#color");
const lineWidthTool = document.querySelector("#lineWidth");
const selectedImage = document.querySelector("#file-input");
const saveImg = document.querySelector("#save-img");

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

// save image
saveImg.addEventListener("click", () => {
  saveImage(canvasElement);
});

// change canvas size
const canvasDimensionsForm = document.getElementById("canvas-dimensions-form");
const canvasWidthInput = document.getElementById("canvas-width");
const canvasHeightInput = document.getElementById("canvas-height");

canvasDimensionsForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita el envío del formulario por defecto

  // Obtiene los valores del ancho y alto del canvas desde los campos de entrada
  let newWidth = parseInt(canvasWidthInput.value);
  let newHeight = parseInt(canvasHeightInput.value);

  // Cambia el tamaño del canvas
  canvasElement.width = newWidth;
  canvasElement.height = newHeight;
  canvas.setCanvasWidth(newWidth);
  canvas.setCanvasHeight(newHeight);

  canvas.initPencil();
  // También puedes borrar el contenido existente si lo deseas
  canvas.clearCanvas();
});
