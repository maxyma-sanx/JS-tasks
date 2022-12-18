import apiInstance from "../services/api.js";

// PRODUCTS

const getProducts = async () => {
  const {
    data: { products },
  } = await apiInstance.get(`/products`);

  return products;
};

const getProductById = async (id) => {
  const { data } = await apiInstance.get(`/products/${id}`);

  return data;
};

const createProduct = async (product) => {
  const result = await apiInstance.post(`/products/add`, product);

  return result;
};

const getCategories = async () => {};

const searchProductsByCategory = async () => {};

const filterProducts = async () => {};

const getProductsByLastCategory = async () => {};
const addProduct = async () => {};

const updateProduct = async () => {};

const deleteProduct = async () => {};

export default {
  getProducts,
  getProductById,
  searchProductsByCategory,
  filterProducts,
  getCategories,
  getProductsByLastCategory,
  addProduct,
  updateProduct,
  deleteProduct,
  createProduct,
};
