// / 8. В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).
let min = Number(prompt("Введіть число від 0 до 59"));

if (min < 15) {
  alert("Перша четверть");
} else if (min < 30) {
  alert("Друга четверть");
} else if (min < 45) {
  alert("Третя четверть");
} else {
  alert("Четверта четверть");
}
