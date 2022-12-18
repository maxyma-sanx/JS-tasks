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

export default {
  createProductsMarkup,
  createProductByIdMarkup,
};
