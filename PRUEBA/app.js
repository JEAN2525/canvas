
var usuario = prompt("cual es tu peso? ");
var planeta = prompt(" de que planeta eres?" + "\n 1 marte" + "\n 2 Marte ");
var g_tierra = 8.8;
var g_marte = 9.5;
var g_jupiter = 9.9;
var mi_peso = usuario;
var nombre;
var lienzo;
var dibujo = document.getElementById("canvas1");
var lienzo = dibujo.getContext("2d");






if
(planeta == 1)
{
    var peso_final = mi_peso * g_tierra / g_marte;
    var nombre = "marte";
}

else if(planeta == 2)
{
    var peso_final = mi_peso * g_tierra / g_jupiter;
    var nombre = "jupiter";
}

else
{
  var peso_final = 0;
  var nombre = "planeta no existe";
}

peso_final = parseInt(peso_final);
document.write("\n mi peso en " + nombre + " es " + peso_final);

// dibujando

dibujar("#ffffff", 100, 100, 200, 200);
dibujar("#ffffff",100,10,290,200);
dibujar("#ffffff",100,10,100,100);
dibujar("#ffffff",200,200,290,200);
dibujar("#ffffff",100,100,120,170);
dibujar("#ffffff",200,200,120,170);
dibujar("#ffffff",118,160,0,300);
dibujar("#ffffff",130,173,0,300);
dibujar("#ffffff",120,30,145,0);
dibujar("#ffffff",130,40,163,0);
dibujar("#ffffff",145,56,190,0);

function dibujar(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath;
}
//canvas 2
//canvas2

var lienzo2;
var dibujo_lineas = document.getElementById("canvas2");
var lienzo2 = dibujo_lineas.getContext("2d");
var lineas = 30;
var c = 0;
var yi, xf;



while(c < lineas)
{
  dibujar_lineas_curvas("white",0,yi,xf,300);
  yi = c * 10;
  xf = 10 * (c + 1);

  console.log("linea" + c);
  c = c + 1;
}



function dibujar_lineas_curvas(color,xinicial,yinicial,xfinal,yfinal)
{

lienzo2.beginPath();
lienzo2.strokeStyle = color;
lienzo2.moveTo(xinicial,yinicial);
lienzo2.lineTo(xfinal,yfinal);
lienzo2.stroke();
lienzo2.closePath;
}





