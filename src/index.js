import "./styles/normalize.css";
import "./styles/index.css";

import productsApi from "./requests/products";
import usersApi from "./requests/users";
import postsApi from "./requests/posts";

import renderService from "./services/markupService";
import apiInstance from "./services/api";
import { ok } from "assert";

// Завдання 1
const allProducts = document.querySelector("#allProducts");

const renderProducts = async () => {
  const products = await productsApi.getProducts();

  allProducts.insertAdjacentHTML(
    "beforeend",
    renderService.createProductsMarkup(products)
  );
};

// renderProducts();

// Завдання 2
const form = document.querySelector("#singleProductForm");
const product = document.querySelector("#singleProduct");

form.addEventListener("submit", onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  const { id } = e.currentTarget.elements;
  const value = id.value;

  const productData = await productsApi.getProductById(value);

  product.innerHTML = renderService.createProductByIdMarkup(productData);
}

// Завдання 3

const createForm = document.querySelector("#createProduct");

createForm.addEventListener("submit", onCreateFormSubmit);

async function onCreateFormSubmit(e) {
  try {
    e.preventDefault();

    const { title, description, price } = e.currentTarget.elements;

    const data = {
      title: title.value,
      description: description.value,
      price: price.value,
    };

    const res = await productsApi.createProduct(data);

    if (!res.status === 200) {
      throw new Error("error");
    }
  } catch (error) {
    console.log(`${error.message}, щось пiшло не так`);
  }
}

// Завдання 4

const formDelete = document.querySelector("#deletionProductForm");

formDelete.addEventListener("submit", onFormDeleteSubmit);

async function onFormDeleteSubmit(e) {
  e.preventDefault();

  const { deletionId } = e.currentTarget.elements;
  const value = deletionId.value;

  try {
    const { data } = await productsApi.deleteProduct(value);
    if (data.isDeleted) {
      alert(`Success! ${data.title} was deleted.`);
    } else {
      throw new Error("wasn't deleted");
    }
  } catch (error) {
    alert(`Error! ${error.message} `);
  }

  // product.innerHTML = renderService.createProductByIdMarkup(productData);
}

// Завдання 5

// productsApi.searchProductsByCategory('smartphones');
// productsApi.filterProducts(5, 10, ['title', 'price']);
// productsApi.getCategories();
// productsApi.getProductsByLastCategory();
// productsApi.addProduct();
// productsApi.updateProduct(10);
// productsApi.deleteProduct(1);
productsApi.getProducts();

// usersApi.getUsers();
// usersApi.getUserById(10);
// usersApi.getUsersByName('Med');
// usersApi.getCartsByUserId(1);
// usersApi.getPostsByUserId(1);
// usersApi.getTodosByUserId(1);
// usersApi.addUser();

// postsApi.getPosts();
// postsApi.getPostById(10);
// postsApi.getPostByContentKey('dreams');
// postsApi.getPostComments(5);
// postsApi.addPost();
// postsApi.updatePost(1);
// postsApi.deletePost(15);
