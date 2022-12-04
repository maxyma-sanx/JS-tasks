// Створіть функцію, яка отримує функцію як аргумент
// і виконує її через 2 секунди

function foo(callback) {
  setTimeout(callback, 3000);
}
foo(hello);

function hello() {
  console.log("hello");
}
