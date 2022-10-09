// . При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

let value = prompt("Введіть число");
let total = 0;

do {
  if (!value) {
    total += Number(value);
    value = prompt("Введіть число");
  }
} while (value);

alert(`Общая сумма введенных чисел равна ${total}.`);
