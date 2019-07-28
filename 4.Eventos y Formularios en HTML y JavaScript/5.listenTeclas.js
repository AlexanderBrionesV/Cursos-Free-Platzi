var dibujoJS = document.getElementById("dibujito");
var lienzoObj= dibujoJS.getContext("2d");

document.addEventListener("keyup",pintarYa);


function pintarYa(evento){
console.log(evento);
switch (evento.keyCode) {
  case teclas.UP:
    console.log("arribita");
    mover=upLow;
    dibujarLineas("blue",xIn,yIn,xOut,(yOut-mover));
    xIn=xOut;        yIn=yOut-mover;   xOut=xOut;          yOut=yOut-mover;
    break;
  case teclas.DOWN:
    console.log("abajito");
    mover=upLow;
    dibujarLineas("blue",xIn,yIn,xOut,(yOut+mover));
    xIn=xOut;        yIn=yOut+mover;   xOut=xOut;          yOut=yOut+mover;
    break;
  case teclas.RIGHT:
    console.log("derecha");
    mover=lados;
    dibujarLineas("black",xIn,yIn,(xOut+mover),yOut);
    xIn=xOut+mover;   yIn=yOut;         xOut=xOut+mover;    yOut=yOut;
    break;
  case teclas.LEFT:
    console.log("izquierda");
    mover=lados;
    dibujarLineas("black",xIn,yIn,(xOut-mover),yOut);
    xIn=xOut-mover;   yIn=yOut;         xOut=xOut-mover;    yOut=yOut;
    // si aqui arribita ponia + e vez de menos salia una diagonal ------------------------
    break;

  default:
    console.log("tecla x");
    break;

}
}



  var teclas={
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT:39
  };
  var movimientos=120;
  var upLow=20;         var lados=10;
  var direccion=0;
  var xIn=0;   var yIn=0;    var xOut=0;    var yOut=0;     var mover;


function dibujarLineas(color,xInd,yInd,xOutd,yOutd){
  lienzoObj.beginPath();
  lienzoObj.strokeStyle= color;
  lienzoObj.moveTo(xInd,yInd);
  lienzoObj.lineTo(xOutd,yOutd);
  lienzoObj.stroke();
  lienzoObj.closePath();
}
