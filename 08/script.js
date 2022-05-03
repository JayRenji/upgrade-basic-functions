 console.log('working');

// **Iteration #8: Contador de repeticiones**

// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:


const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    let counter =[];
    let element = false;
    for( let i=0; i<param.length;i++){
        element=false;
        for(const key in counter){
            if(counter[key].name==param[i]){
                counter[key].total++
                element=true;
            }
    }

    if(!element){
        counter.push({
            name:param[i],
            total:1,
        });
    }

  }
  return counter;
}
console.log(repeatCounter(counterWords));


