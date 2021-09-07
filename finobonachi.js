
var numero = parseInt(prompt("Digite un numero"));
var anterior = 0;
var temporal = 0;
var x = 1;
var mensaje = "0 ";
//0,1,1,2,3,5,8,13,21

   
    console.log(0);
    while (true) {
        console.log(x);
        mensaje += x + " ";
          temporal = x;
        x = x + anterior;
        anterior = temporal;
        if (x > numero){
            break;
        }
    }

    alert(mensaje);
    
    

 