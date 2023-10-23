/* SCRIPT DESCARGAR IMAGEN */

export function saveImage() {
  let imageData = canvas.toDataURL("image/png");
  let blob = dataURItoBlob(imageData);
  let url = URL.createObjectURL(blob);

  let link = document.createElement("a");
  link.download = "canvas.png";
  link.href = url;
  link.click();
}

function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(",")[1]);
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
}
