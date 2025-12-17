const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
  //Agregamos el número 99 al final de la primera fila
  arr[0].push(99);
  
  // Agregamos una fila completa al final de la matriz
  arr.push([32,33,34,35,36,37,38,39,40,41]);

  //Eliminamos un número específico (11) de una fila determinada (fila 2)
  arr[1].splice(1, 1); // Elimina el elemento en el índice 1 de la segunda fila
  
  //Invertimos una fila sin afectar las demás (fila 3)
  arr[2].reverse();
 
  // Type your code above this line!

  console.log(arr);