var d = document.getElementById("dibujito");
var lienzoObj= d.getContext("2d");
/*
for (var i = 0; i <30 ;i++) {
intarLineas("#AAF",0,(10*i),(10*(i+1)),300);
console.log("linea "+i);
//  pintarLineas("red",(x1+30),(300+2*i),(y1+30),2*i);
}*/


var lineas=300;
for(i=0; i < lineas/10; i++)
{
    dibujarLineas("blue",0,i*10,i*10 +10,lineas);
    dibujarLineas("green",i*10 + 10,0,lineas,i*10);
    dibujarLineas("purple",i*10,lineas,lineas,lineas-i*10);
    dibujarLineas("red",0,lineas-i*10,i*10 +10,0);
/*
    if(lineas/2 -i*5 > lineas/3)
    {
        dibujarLineas("purple",lineas/3 + i*5,lineas/2,lineas/2,lineas/2 - i*5 - 5);
        dibujarLineas("blue",lineas/2,lineas/3 + i*5,lineas/2 + i*5 + 5,lineas/2);
        dibujarLineas("green",lineas/3+i*5,lineas/2,lineas/2,lineas/2 + i*5 + 5);
        dibujarLineas("red",lineas/2,2*(lineas/3)-i*5,lineas/2 + i*5 + 5,lineas/2);
    }*/
}

function dibujarLineas(color,xIn,yIn,xOut,yOut){
  lienzoObj.beginPath();
  lienzoObj.strokeStyle= color;
  lienzoObj.moveTo(xIn,yIn);
  lienzoObj.lineTo(xOut,yOut);
  lienzoObj.stroke();
  lienzoObj.closePath();
}
