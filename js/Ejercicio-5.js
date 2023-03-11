const text = "Desea seguir agregando numeros?"
let suma = 0;
letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

do
{
    let dni = parseInt(prompt("Introduce el DNI: "));
    if(typeof dni == "number" && dni>= 0 && dni<=99999999)
    {
        resto = dni%23;
        alert("Le corresponde la letra: " + letras[resto]);
    }
    else
    {
        alert("No es un numero valido");
    }
}while(window.confirm(text)==true);