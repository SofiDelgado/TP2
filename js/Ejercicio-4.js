const text = "Desea seguir agregando numeros?"
let suma = 0;
do
{
    let numeros = parseInt(prompt("Introduce un numero: "));
    if(isNaN(numeros)==false)
    {
        suma += numeros;
    }
    else
    {
        alert("No es un numero");
    }
    resultado = window.confirm(text);
    
}while(resultado==true);

alert(suma);