var d=document.getElementById("dibujito");      //almacenamos el canvas--
//getElementById trae un elemento a travez del id
var objetoLiezo=d.getContext("2d"); //obtener el lienzo
console.log(objetoLiezo);
//maravilloso, solo debemos crear

objetoLiezo.beginPath(); //papel
//----repetir cuantas figuras sean necesarias---
objetoLiezo.strokeStyle= "blue"; //linea color azul
objetoLiezo.moveTo(0,0); //donde arranca el trasado
objetoLiezo.lineTo(0,200); //fin
//----------blue----------
objetoLiezo.moveTo(0,150);
objetoLiezo.lineTo(150,150);
//----------red----------
objetoLiezo.moveTo(0,0);
objetoLiezo.lineTo(150,200);
//----------red----------
objetoLiezo.moveTo(150,150);
objetoLiezo.lineTo(0,200);
//----------green----------
objetoLiezo.moveTo(150,150);
objetoLiezo.lineTo(15,200);
//----repetir cuantas figuras sean necesarias---
objetoLiezo.stroke();//hacer a linea
objetoLiezo.closePath(); //terminar la linea
