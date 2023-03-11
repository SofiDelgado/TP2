const text = "Desea seguir agregando texto?"
let oracion ="";
do
{
    let cadena = prompt("Introduce texto: ");
    resultado = window.confirm(text);
    oracion += cadena+ " - ";
}while(resultado==true);
if(oracion!=null)
{
alert(oracion);
}