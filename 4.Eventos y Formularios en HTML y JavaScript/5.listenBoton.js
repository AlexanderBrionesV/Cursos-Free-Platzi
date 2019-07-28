var textoJS = document.getElementById("txtingresa1");
var botonJS = document.getElementById("btningresar1");
botonJS.addEventListener("click",pinterClick);

var dibujoJS = document.getElementById("dibujito");
var lienzoObj= dibujoJS.getContext("2d");

var movimientos=120;  var inicio=150;
var upLow=20;         var lados=10;
var direccion=0; //0 costados -----1 upLow
var xIn=0;   var yIn=0;    var xOut=0;    var yOut=0;     var mover;

for (var i = 0; i < movimientos; i++) {
  direccion=direccion+1;
  if (direccion==4) {         direccion=0;  }

  if (direccion==0) {         mover=lados;
                      dibujarLineas("black",xIn,yIn,(xOut+mover),yOut);
                      xIn=xOut+mover;   yIn=yOut;         xOut=xOut+mover;    yOut=yOut;     }
   if (direccion==1) {        mover=upLow;
                      dibujarLineas("blue",xIn,yIn,xOut,(yOut+mover));
                      xIn=xOut;        yIn=yOut+mover;   xOut=xOut;          yOut=yOut+mover;}
  if (direccion==2) {         mover=lados;
                      dibujarLineas("black",xIn,yIn,(xOut+mover),yOut);
                      xIn=xOut+mover;   yIn=yOut;        xOut=xOut+mover;    yOut=yOut;      }
  if (direccion==3) {         mover=upLow;
                      dibujarLineas("blue",xIn,yIn,xOut,(yOut-mover));
                      xIn=xOut;        yIn=yOut-mover;   xOut=xOut;          yOut=yOut-mover;} /**/
}

function dibujarLineas(color,xInd,yInd,xOutd,yOutd){
  lienzoObj.beginPath();
  lienzoObj.strokeStyle= color;
  lienzoObj.moveTo(xInd,yInd);
  lienzoObj.lineTo(xOutd,yOutd);
  lienzoObj.stroke();
  lienzoObj.closePath();
}

function pinterClick(){
  mover=lados;
  dibujarLineas("black",xIn,yIn,(xOut+mover),yOut);
  xIn=xOut+mover;   yIn=yOut;         xOut=xOut+mover;    yOut=yOut
}
