/*8- Crea script para generar pirámide siguiente con
 los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/
let cantDeNum = parseInt(prompt("Ingrese la cantidad de numeros que quiere para la piramide:"));
for(let i=1; i<=cantDeNum;i++)
{
    
    for(let j=1; j<=i ;j++)
    {
        document.write(j);
       
    }

    document.write('</br>');

    
}