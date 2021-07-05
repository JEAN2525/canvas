var g_tierra = 7.8;




//dibujo canvas
var d = document.getElementById("canvas1");
var lienzo = d.getContext("2d");
var ruta = window.location;

dibujar("red",100,100,200,200);
dibujar("red",100,10,290,200);
dibujar("red",100,10,100,100);
dibujar("red",200,200,290,200);
dibujar("red",100,100,120,170);
dibujar("red",200,200,120,170);
dibujar("red",118,160,0,300);
dibujar("red",130,173,0,300);
dibujar("red",120,30,145,0);
dibujar("red",130,40,163,0);
dibujar("red",145,56,190,0);

function dibujar(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = "red";
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath;
    
}


document.write("tu ubicacion o ruta es " + window.location);
console.log(lienzo);
