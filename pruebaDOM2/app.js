var boton = document.getElementById("botoncito");
var txt_enviar = document.getElementById("text/enviar_edad"); 



var planeta = prompt("de que planeta deseas saber tu peso ? " + "\n 1. marte" + "\n 2. jupiter");
var mi_peso = prompt("cual es tu peso en la tierra");
var g_tierra = 8.8;
var g_marte = 9.5;
var g_jupiter = 10;
var nombre;
var dibujo_canvas = document.getElementById("canvas3");
var lienzo = dibujo_canvas.getContext("2d");
var contraseña = "";
var edad;
var nacimiento;
var año_actual;








if(planeta == 1)
{
   var peso_final = mi_peso * g_marte / g_tierra;
   var nombre = "marte";
}

else if(planeta == 2)
{
    var peso_final = mi_peso * g_jupiter / g_tierra;

    var nombre = "jupiter";
}

else
{
    nombre = "no elejiste un nmbre correcto";
}

document.write("tu peso en " + nombre + " es " + peso_final);

//dibujo
var c = 0;
var linea = 50;
var yini, xfi, xfin, yinicio , yfinal, yrefinal;
var d = 500;

    
for (c = 0; c < linea; c++)    
{
    dibujo_malla("red",0,yini,xfi,500);
    dibujo_malla("red",500,yini,xfin,500);
    dibujo_malla("red",xfin,0,500,yinicio);
    dibujo_malla("red",xfin,0,500,yinicio);

    
    

    yini = c * 10;
    xfi = 10 * c;
    xfin = 500 - xfi;
    yinicio = 500 - yini;
    yrefinal = 500 - yinicio;

}



function dibujo_malla(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath;
}

function evento_click_boton()
{
  alert("haz clickeado el boton");
}





//no se pue ciclo while si la variable ya esta declarada




while(contraseña != "hola")
{
    contraseña = prompt("ingresa tu contraseña")
}

if (contraseña != "hola")
{

    alert("contraseña incorrecta")
}
   
console.log("bienvenido");
document.write("bienvenido");

//EVENTOS-EVENTOS-EVENTOS

boton.addEventListener("click", evento_click_boton);





