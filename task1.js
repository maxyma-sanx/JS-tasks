//3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Выведите в консоль всех четных чисел от min до max

const min = 0;
const max = 10;

for (let i = max; i >= min; i += -1) {
  if (i % 2 === 0) console.log(i);
}
