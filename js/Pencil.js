class Pencil {
  constructor() {
    this.color = "#000000";
    this.grosor = 10;
    this.lineCap = "round";
    this.lineJoin = "round";
  }

  setColor(color) {
    this.color = color;
  }

  setGrosor(grosor) {
    this.grosor = grosor;
  }

  setLineCap(lineCap) {
    this.lineCap = lineCap;
  }

  setLineJoin(lineJoin) {
    this.lineJoin = lineJoin;
  }
}

export default Pencil;
