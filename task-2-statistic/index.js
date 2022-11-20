// Необхідно зібрати статистику по всіх вузлах усередині елемента переданого у параметрі root і повернути її як об'єкт
// Статистика повинна містити:
// - кількість текстових вузлів
// - кількість елементів кожного класу
// - кількість елементів кожного тегу
// Для роботи з класами рекомендується використовувати classList

const containerMid = document.querySelector(".container-mid");

function collectDOMStat(root) {
  const stat = {
    tags: {},
    classes: {},
    texts: 0,
  };
  const childNodes = containerMid.childNodes;
  childNodes.forEach((node) => {
    if (node.nodeType === 3) {
      stat.texts += 1;
    } else if (node.nodeType === 1) {
      const tag = node.tagName;
      const classList = node.classList;

      classList.forEach((c) => {
        if (stat.classes[c]) {
          stat.classes[c] += 1;
        } else {
          stat.classes[c] = 1;
        }
      });

      if (stat.tags[tag]) {
        stat.tags[tag] += 1;
      } else {
        stat.tags[tag] = 1;
      }
    }
  });

  console.log(childNodes);
  return stat;
}

console.log(collectDOMStat(containerMid));
