console.log("working");

// **Iteración #6: Valores únicos**

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potato",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(param) {
  let list = [];

  for (const iterator of param) {
    let word = false;
    for (const iterator2 of list) {
      if (iterator2 === iterator) {
        word = true;
      }
    }

    if (!word) {
      list.push(iterator);
    }
  }
  return list;
}
console.log(removeDuplicates(duplicates));
