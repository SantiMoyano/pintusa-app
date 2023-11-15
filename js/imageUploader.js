// get image, object canvas, canvas on html and draw image on canvas
export function uploadImage(canvas, canvasElement, fileInput) {
  let file = fileInput.files[0];
  let reader = new FileReader();

  reader.addEventListener("load", () => {
    const img = new Image();
    img.src = reader.result;

    img.addEventListener("load", () => {
      if (img.width < 600) {
        canvasElement.width = 600;
        canvasElement.height = 600;
        canvas.setCanvasWidth(600);
        canvas.setCanvasHeight(img.height);
      } else {
        canvasElement.width = img.width;
        canvasElement.height = img.height;
        canvas.setCanvasWidth(img.width);
        canvas.setCanvasHeight(img.height);
      }

      canvas.drawImageOnCanvas(img);
      canvas.initPencil();
    });
  });
  reader.readAsDataURL(file);
}
