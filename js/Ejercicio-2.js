let nota = parseInt(prompt("Ingrese la nota:"));

switch(nota>=0 || nota<=10)
{
    case nota== 1 || nota==2:
        alert("Muy insuficiente");
        break;
    case nota== 3 || nota==4:
        alert("Insuficiente");
    break;
    case nota== 5 || nota==6:
        alert("Suficiente");
    break;
    case nota==7:
        alert("Bien");
    break;
    case nota== 8 || nota==9:
        alert("Notable");
    break;
    case nota==10:
        alert("Sobresaliente");
        break;
    case nota>10 || nota<0:
        alert("Numero erroneo");
    default:
        alert("Ingrese una nota valida");
}