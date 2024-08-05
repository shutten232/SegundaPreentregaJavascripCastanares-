// ingrese la distancia que desea correr en km
let distancia = prompt("Ingrese la distancia que desea correr (en km):");

// ingrese su veloidad de carrera en minutos por km.
let ritmo = prompt("Ingrese su ritmo(minutos por kilometro):");

// ingrese su peso 
let peso = prompt("ingrese su peso *Kilogramos:");

distancia = parseFloat(distancia);
ritmo = parseFloat(ritmo);
peso = parseFloat(peso);

// calcular el tiempo total de carrera
let tiempoTotal = distancia * ritmo;

//calcular el gasto calorico
//  1.036 caloras por kilometro por cada kilo de peso corporal.
let caloriasQuemadas = distancia * peso * 1.036;

//mostrar los resultados al usuario
alert("Tiempo estimado para completar " + distancia + " km: " + tiempoTotal.toFixed(2) + " minutos.");
alert("Calorías quemadas: " + caloriasQuemadas.toFixed(2) + " kcal.");

console.log("Tiempo total: " + tiempoTotal.toFixed(2) + " minutos.");
console.log("Calorías quemadas: " + caloriasQuemadas.toFixed(2) + " kcal.");
