var dibujoJS = document.getElementById("dibujito");
var lienzoObj= dibujoJS.getContext("2d");

document.addEventListener("keyup",pintarYa);


function pintarYa(evento){
//console.log(evento);
switch (evento.keyCode) {
  //-------------------- hacia arriba
  case teclas.Y:
  console.log("abajo pa arriba izquierda");
  mover=upLow;
  dibujarLineas("blue",xIn,yIn,(xOut+mover),(yOut-mover));
  xIn=xOut+mover;        yIn=yOut-mover;   xOut=xOut+mover;          yOut=yOut-mover;
  break;
  case teclas.R:
  console.log("abajo pa arriba derecha");
  mover=upLow;
  dibujarLineas("blue",xIn,yIn,(xOut-mover),(yOut-mover));
  xIn=xOut-mover;        yIn=yOut-mover;   xOut=xOut-mover;          yOut=yOut-mover;
  break;
  //-------------------- hacia abajo
  case teclas.V:
  console.log("arriba pa abajo  izquierda");
  mover=upLow;                  //una curiosidad si en xout pongo +
  dibujarLineas("blue",xIn,yIn,(xOut-mover),(yOut+mover));
  xIn=xOut-mover;        yIn=yOut+mover;   xOut=xOut-mover;          yOut=yOut+mover;
  break;
  case teclas.B:
  console.log("arriba pa abajo derecha");
  mover=upLow;
  dibujarLineas("blue",xIn,yIn,(xOut+mover),(yOut+mover));
  xIn=xOut+mover;        yIn=yOut+mover;   xOut=xOut+mover;          yOut=yOut+mover;
  break;
  //-------------------- normal
  case teclas.T:
    console.log("arribita");
    mover=upLow;
    dibujarLineas("blue",xIn,yIn,xOut,(yOut-mover));
    xIn=xOut;        yIn=yOut-mover;   xOut=xOut;          yOut=yOut-mover;
    break;
  case teclas.G:
    console.log("abajito");
    mover=upLow;
    dibujarLineas("blue",xIn,yIn,xOut,(yOut+mover));
    xIn=xOut;        yIn=yOut+mover;   xOut=xOut;          yOut=yOut+mover;
    break;
  case teclas.H:
    console.log("derecha");
    mover=lados;
    dibujarLineas("black",xIn,yIn,(xOut+mover),yOut);
    xIn=xOut+mover;   yIn=yOut;         xOut=xOut+mover;    yOut=yOut;
    break;
  case teclas.F:
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
    R:82,   T: 84,    Y:89,
    F:70,             H:72,
    V:86,   G:71,     B:66
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
