var eventos = require('events'); 

var EmisorEventos = eventos.EventEmitter; 
var manejador = new EmisorEventos(); 

manejador.on('despedida', function(nombre){ 
    console.log("Adiós " + nombre); 
 }); 

manejador.on('saludo', function(nombre){ 
    console.log("Hola " + nombre); 
 }); 


 setInterval(function(){ 
    manejador.emit('saludo',"Alex"); 
 },2000); 

 setInterval(function(){ 
    manejador.emit('despedida',"Alex"); 
 },1001);  