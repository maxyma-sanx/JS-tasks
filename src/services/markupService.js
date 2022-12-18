const createProductsMarkup = (products) => {
  return products
    .map(({ title, description, price }) => {
      return `
      <li>
        <h2>Назва: ${title}</h2>
        <p>Опис: ${description}</p>
        <span>Цiна: ${price}</span>
      </li>
        `;
    })
    .join("");
};

const createProductByIdMarkup = ({ title, description, price }) => {
  return `
    <h2>Назва: ${title}</h2>
    <p>Опис: ${description}</p>
    <span>Цiна: ${price}</span>
    `;
};

const crateUsersMarkup = (users) => {
  return users
    .map(({ firstName, lastName, age }) => {
      return `
      <li>
        <h2>Ім'я: ${firstName}</h2>
        <p>Прізвище: ${lastName}</p>
        <span>Вік: ${age}</span>
      </li>
        `;
    })
    .join("");
};

export default {
  crateUsersMarkup,
  createProductsMarkup,
  createProductByIdMarkup,
};
