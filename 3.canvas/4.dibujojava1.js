var d=document.getElementById("dibujito");      //almacenamos el canvas--
//getElementById trae un elemento a travez del id
var lienzo=d.getContext("2d"); //obtener el lienzo
console.log(lienzo);

lienzo.beginPath(); //papel
lienzo.strokeStyle= "blue"; //linea color azul
lienzo.moveTo(50,100); //donde arranca el trasado
lienzo.lineTo(120,200); //fin
lienzo.stroke();//hacer a linea
lienzo.closePath(); //terminar la linea
//linea verde----------------------------
var lienzo2=d.getContext("2d");
console.log(lienzo);

lienzo2.beginPath(); //papel
lienzo2.strokeStyle= "green"; //linea color azul
lienzo2.moveTo(40,150); //donde arranca el trasado
lienzo2.lineTo(120,180); //fin
lienzo2.stroke();//hacer a linea
lienzo2.closePath(); //terminar la linea
// roja
lienzo2.beginPath(); //papel
lienzo2.strokeStyle= "red"; //linea color azul
lienzo2.moveTo(30,120); //donde arranca el trasado
lienzo2.lineTo(100,50); //fin
lienzo2.stroke();//hacer a linea
lienzo2.closePath(); //terminar la linea

// no es necesario grear otros objetos para hacer un nuevo trazado
lienzo2.beginPath(); //papel
lienzo2.strokeStyle= "yellow"; //linea color azul
lienzo2.moveTo(20,100); //donde arranca el trasado
lienzo2.lineTo(50,30); //fin
//.......
lienzo2.strokeStyle= "black";
lienzo2.moveTo(0,160); //donde arranca el trasado
lienzo2.lineTo(150,10); //fin
//otro
lienzo2.strokeStyle= "pink";
lienzo2.moveTo(40,100); //donde arranca el trasado
lienzo2.lineTo(35,270); //fin
//----------
lienzo2.stroke();//hacer a linea
lienzo2.closePath(); //terminar la linea

//maravilloso, solo debemos crear
var d=document.getElementById("dibujito");
var lienzoOBJ=d.getContext("2d"); //obtener el lienzo
console.log(lienzoOBJ);

lienzoOBJ.beginPath(); //papel
//----repetir cuantas figuras sean necesarias---
lienzoOBJ.strokeStyle= "blue"; //linea color azul
lienzoOBJ.moveTo(100,190); //donde arranca el trasado
lienzoOBJ.lineTo(125,290); //fin
//----repetir cuantas figuras sean necesarias---
lienzoOBJ.stroke();//hacer a linea
lienzoOBJ.closePath(); //terminar la linea
