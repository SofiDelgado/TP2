/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp*/
let nombre = [];
let edad = [];
for(let i=0;i<3;i++)
{
    nombre.push(prompt("Ingrese un nombre "));
    edad.push(parseInt(prompt("Ingrese la edad de "+ nombre[i])));
}

document.write(nombre[Math.max(edad)]);