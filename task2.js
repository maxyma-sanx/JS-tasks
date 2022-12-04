//Напишіть функцію, яка виводитиме числа від 1 до 10 із затримкою в 1 секунду між кожним значенням

// function count() {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// count();

function count2() {
  let number = 1;

  const id = setInterval(() => {
    console.log(number);
    number += 1;
    if (number > 10) {
      clearInterval(id);
    }
  }, 1000);
}

count2();
