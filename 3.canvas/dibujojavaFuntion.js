var d = document.getElementById("dibujito");
var lienzoObj= d getContext("2d");

pintarlineas("blue",10,300,220,10);

funtion pintraLineas(color,xIn,yIn,xOut,yout){
  lienzoObj.beginPath();
  lienzoObj.stroke= color;
  lienzoObj.moveTo(xIn,yIn);
  lienzoObj.lineTo(xOut,yOut);
  lienzoObj.stroke();
  lienzoObj.closePath();
}
