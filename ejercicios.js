// 1. Declarar una variable nombre y mostrarla en consola
let nombre = "Juan";
console.log(nombre);

// 2. Declarar dos variables a y b y mostrar su suma
let a = 5;
let b = 3;
console.log(a + b);

// 3. Declarar una variable edad e imprimir un mensaje con ella
let edad = 20;
console.log("Mi edad es: " + edad);

// 4. Convertir un número a cadena usando .toString()
let numero = 42;
let cadena = numero.toString();
console.log(cadena);

// 5. Declarar una constante PI y mostrar su valor
const PI = 3.1416;
console.log(PI);

// 6. Calcular el área de un rectángulo
let base = 8;
let altura = 5;
let area = base * altura;
console.log("Área: " + area);

// 7. Calcular el residuo de una división usando %
let residuo = 10 % 3;
console.log("Residuo: " + residuo);

// 8. Incrementar una variable con ++
let contador = 0;
contador++;
console.log(contador);

// 9. Comparar dos números
let x = 10;
let y = 20;
console.log(x > y);
console.log(x < y);
console.log(x == y);

// 10. Evaluar si un número es mayor que 10
let num = 15;
if (num > 10) {
    console.log("El número es mayor que 10");
}

// 11. Determinar si un número es par o impar
let n = 7;
if (n % 2 === 0) {
    console.log("Es par");
} else {
    console.log("Es impar");
}

// 12. Verificar si una persona es mayor de edad
let edadPersona = 17;
if (edadPersona >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// 13. Comparar dos números usando if...else
let num1 = 30;
let num2 = 50;
if (num1 > num2) {
    console.log("num1 es mayor");
} else {
    console.log("num2 es mayor");
}

// 14. Clasificar una nota como aprobado o desaprobado
let nota = 13;
if (nota >= 11) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}

// 15. Usar switch para mostrar el día de la semana
let dia = 3;
switch (dia) {
    case 1: console.log("Lunes"); break;
    case 2: console.log("Martes"); break;
    case 3: console.log("Miércoles"); break;
    case 4: console.log("Jueves"); break;
    case 5: console.log("Viernes"); break;
    case 6: console.log("Sábado"); break;
    case 7: console.log("Domingo"); break;
    default: console.log("Día inválido");
}

// 16. Imprimir números del 1 al 10 con for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 17. Sumar los números del 1 al 100
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log("Suma: " + suma);

// 18. Mostrar la tabla de multiplicar de un número
let tabla = 5;
for (let i = 1; i <= 10; i++) {
    console.log(tabla + " x " + i + " = " + (tabla * i));
}

// 19. Contar del 10 al 1 usando while
let c = 10;
while (c >= 1) {
    console.log(c);
    c--;
}

// 20. Recorrer un arreglo e imprimir sus elementos
let arreglo = ["manzana", "pera", "uva", "naranja"];
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}