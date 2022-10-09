// Напишіть функцію яка повертатиме перший елемент з масиву, який прийматиме в якості параметру array. Якщо у якості 2 параметру буде передано число n, то функція має повертати перші `n` елементів масиву

// Приклад:
//   getFirst([1, 2, 3]) //1
//   getFirst([1, 2, 3], 2) //[1, 2]
function getElements(array, number) {
  if (!number) {
    return array[0];
  }
  return array.slice(0, number);
}
console.log(getElements([1, 2, 3])); //1
console.log(getElements([1, 2, 3], 2)); //[1, 2]
