

    let n1, n2, n3, mayor, menor;

    n1 = parseInt(prompt("Digite primer número"));
    n2 = parseInt(prompt("Digite segundo número"));
    n3 = parseInt(prompt("Digite tercer número"));
    if(n1>n2)
    {
        mayor=n1;
        menor=n2;
    }
    else
    {
        mayor=n2;
        menor=n1;
    }
    if(mayor<n3)
        mayor=n3;

    if(menor>n3)
        menor=n3;

         document.write("El número mayor es "+mayor); 
         document.write("<br>") 
         document.write("El número menor es "+menor);

 
    




