//Página elegida: Gamers Ecuador
//Variables
//Simples
let nombrePagina = "Gamers Ecuador"
let fechaCopyrigth = 2024
let productosTendencia = true
let anioCreacion = undefined

//Compuestos
const preciosProductosPopulares = {
    MousePadMegaman: 15.00, TecladoPokemon: 39.99, headsetOnikuma: 45.00,
    MousepadDBZ: 19.99, SopAudOnikuma: 28.00, SoporteControlSonic: 59.00,
    TecladoEYooso: 42.00, TecladoRedragon: 59.99, SillaFoxLab: 292.00
}

const Tienda = [
    "Accesorios","BasesCooler", "Cases", "Combos",
    "Consolas", "Figuras", "Gamepads", "Headsets",
    "Keycaps", "Micrófonos", "Monitores", "Mouse",
    "Mouse Pads", "Parlantes", "Sillas", "Switches",
    "Soportes", "Teclados", "Videojuegos", "Webcams"
]

//var

var precioSonic = preciosProductosPopulares.SoporteControlSonic;
if (precioSonic > 60){
    var precioSonic = 30;
}
console.log(precioSonic)

//let 
if (productosTendencia){
    let productosTendencia = false;
    console.log(productosTendencia)
}
console.log(productosTendencia)

//const 
const soporteAudifonos = {
    puertoUSB: true,
    jack: 3.5,
    color: "Rosado"
}

// Strings
let nombreTecladoFizz = "    Teclado Mecánico Redragon Fizz Pro K616 Wireless 60%      "

//Metodos
console.log("Numero de letras que posee el nombre del teclado: ", nombreTecladoFizz.length)
console.log(`Encontrar alguna parte de palabra: ${nombreTecladoFizz.includes("Redragon")}`)
console.log(`Convertir en mayuculas: ${nombreTecladoFizz.toUpperCase()}`)
console.log(`Convertit en minusculas: ${nombreTecladoFizz.toLowerCase()}`)
console.log(`Quitar espacios delante de la frase: ${nombreTecladoFizz.trim()}`)
console.log(`Reemplazar una palabra: ${nombreTecladoFizz.replace("Redragon","Dragon")}`)
console.log(`Cortar una parte de un texto: ${nombreTecladoFizz.slice(0,15)}`)
console.log(`Cortar una parte de un texto: ${nombreTecladoFizz.substring(0,15)}`)
console.log(`Cortar una parte de un texto: ${nombreTecladoFizz.charAt(15)}`)
console.log(`Cortar una parte de un texto: ${nombreTecladoFizz.slice(0,15)}`)
console.log(`Cortar una parte de un texto: ${nombreTecladoFizz.slice(0,15)}`)
console.log(`Repite una parte de un texto: ${nombreTecladoFizz.repeat(2)}`)
console.log(`Divide una parte de un texto: ${nombreTecladoFizz.split(" ")}`)

//Template Literals
console.log(`Color del soporte de audifonos: ${soporteAudifonos.color}`)

//Numeros
//Math
let precioPokemon = preciosProductosPopulares.TecladoPokemon
console.log(`Redondear el precio del teclado Pokemon: ${Math.round(precioPokemon)}`)
console.log(`Sacar raiz cuadrada del precio del teclado Pokemon: ${Math.sqrt(precioPokemon)}`)
console.log(`Sacar el valor absoluto del precio del teclado Pokemon: ${Math.abs(precioPokemon)}`)
console.log(`Sacar el exponente del precio del teclado Pokemon: ${Math.pow(precioPokemon,2)}`)
console.log(`Valor minimo de dos precio: ${Math.min(precioPokemon, precioSonic)}`)
console.log(`Valor maximo de dos valores: ${Math.max(precioPokemon, precioSonic)}`)
console.log(`Valor aleatorio entre 0 a 1000: ${Math.round(Math.random()*1000)}`)

//Orden de precedencia
const descuento = precioPokemon - ((25/100)*precioPokemon);
console.log(descuento)

//Conversión  
const descuentoSoporteSonic = "8";
const operacionParaDescuento =  precioSonic - ((+descuentoSoporteSonic/100)*+precioSonic)
console.log(`El precio del soporte del cable con descuento es: ${operacionParaDescuento}`)

//Booleanos 
unidadesDisponibles = 20
const Disponibilidad = unidadesDisponibles = 0 ? "Se ha agotado" : "Se encuentra desponible"; 
console.log(Disponibilidad);

//Condicionales 
//Condicionales simple 
if(unidadesDisponibles > 0){
    console.log("Se encuentra disponible el producto")
}

//Condicionales doble 
const PorductoNoDisponible = 0; 
if(PorductoNoDisponible <= 0 ){
    console.log("El producto se encuentra Agotado");
}else{
    console.log("Hay existencias");
}

//Condicionales multiples 
const numeroRuedasSilla = 5
if (numeroRuedasSilla  === 5) {
    console.log("La silla tiene 5 ruedas.");
} else if (numeroRuedasSilla  > 5) {
    console.log("La silla tiene mas de 5 ruedas.");
} else {
    console.log("La silla es estatica.");
}

//Bucles
const SillaHeadsetGamer=  ["Controladores Razer™ Triforce de 50 mm","Micrófono cardioide hiperclaro Razer™", "Cancelación de ruido pasiva avanzada","Sonido envolvente 7.1.",
    "Conector de audio de 3,5 mm","Compatibilidad multiplataforma. PC, Mac, PS4, Xbox One, Nintendo Switch y dispositivos móviles","Ligeros y cómodos. Con solo 240 g, apenas recordarás que los tienes puestos",
    "Acolchado más grueso y almohadillas de espuma viscoelástica mejorada"];

//For 
for (let i = 0; i < SillaHeadsetGamer.length; i++) {
    console.log(SillaHeadsetGamer[i]);
}

//While
let a = 0;
while (a < SillaHeadsetGamer.length) {
    console.log(SillaHeadsetGamer[a]);
    a++;
}

//Do - while 
let j = 0;
do {
    console.log(SillaHeadsetGamer[j]);
    j++;
} while (j < SillaHeadsetGamer.length);

//Foreach
const sillasGamers = [
    {nombre: "Silla Gamer FoxLab RGB – Apoya Brazos", precio: 292.00},
    {nombre: "Silla Gamer Madplay Full RGB", precio: 217.00}
]
sillasGamers.forEach(sillaIndividual => {
    console.log(sillaIndividual.precio); 
});

//map 
sillasGamers.map(function(silla){
    console.log("El precio de la silla es: ", silla.precio)
})

//Funciones anonimas 
const calcularPrecioConDescuento = function(precioSonic, descuentoSoporteSonic) {
    console.log(`EL precio del producto con descuento de 8% es: ${precioSonic - ((descuentoSoporteSonic / 100) * precioSonic)}`);
};
calcularPrecioConDescuento(precioSonic, descuentoSoporteSonic); 

//Función autoejecutable
(function (precioSonic = 65.00, descuentoSoporteSonic = 8){
    const respuestaDescuento =  +precioSonic - ((descuentoSoporteSonic/100)*+precioSonic)
    console.log(`EL precio del producto con descuento de 8% es: ${respuestaDescuento}`);
})()

//Función declarada 
function descuentoResultante (precioSoporteCable, descuentoParaSoporteCable){
    console.log(`EL precio del producto con descuento de 8% es: ${precioSoporteCable - 
        ((descuentoParaSoporteCable / 100) * precioSoporteCable)}`);
}
descuentoResultante(precioSoporteCable, descuentoParaSoporteCable)

//Argumentos y parámetros
//Parámetros por default 
function descuentoResultante2 (precioSoporteCable, descuentoParaSoporteCable = 0){
    console.log(`EL precio del producto con descuento de 8% es: ${precioSoporteCable - 
        ((descuentoParaSoporteCable / 100) * precioSoporteCable)}`);
}
descuentoResultante2(precioSoporteCable)

//Parámetros rest 
function infoPedidoMouse (nombreMouse, precioMouse, cantidadSolicitada, ...masInformacion){
    console.log("El nombre del mouse es:", nombreMouse), 
    console.log("El precio del mouse es:", precioMouse), 
    console.log("La cantidad solicitada es:", cantidadSolicitada), 
    console.log("Más información del mouse:", masInformacion)
}; 
infoPedidoMouse("Mouse Gamer Inalámbrico E-Yooso X31", 15.00, 3, "Botones: 6", 
    "Conectividad USB Plug and Play: Sin complicaciones, simplemente conecta y listo.", 
    "Superficie Amplia del Mouse: Ofrece precisión y control para juegos y tareas profesionales."); 

//Retorno de una función 
function infoVideoJuego (){
    //return precio;
    //return unidadesDisponibles;
    //return productoEnOferta; 
    //return estadoDelVideojuego;
    //return caracteristicas; 
    //return imformacionVideojuego; 
    return videojuego; 
}
console.log(infoVideoJuego()); 

//Funcion flecha
//Para comprar algun producto el usuario deve registrarse, para ello se utilizara una función de flecha
const verificarRegistro = (usuarioRegistrado) => {
    if (usuarioRegistrado) {
        console.log("El usuario está registrado. Puede acceder a diferentes funcionalidades.");
    } else {
        console.log("El usuario no está registrado. Registrese porfavor.");
    }
};

// Simulación de registro de usuario
const usuario = {
    nombre: "Mireya García",
    registrado: true
};
verificarRegistro(usuario.registrado);

//Objetos
const sillaGamer = {
    nombre: "Silla Gamer Madplay Full RGB",
    precio: 217.00, 
    color: "Naranga - Negro", 
    cantidadDisponible: 10 
};
console.log(sillaGamer);

//Arreglo
const infoWebcam = [{nombre: "Webcam Logitech BRIO 4K", precio: 214.99}, {nombre: "Webcam Logitech BRIO 4K", precio: 214.99}, 
    {nombre: "Webcam Logitech C920e", precio: 99.99}];
console.log(infoWebcam);