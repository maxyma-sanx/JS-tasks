import apiInstance from "../services/api.js";

// TODOS

const getUsers = async () => {
  const {
    data: { users },
  } = await apiInstance.get("/users");

  return users;
};

const getUserById = async () => {};

const getUsersByName = async () => {};

const getCartsByUserId = async () => {};

const getPostsByUserId = async () => {};

const getTodosByUserId = async () => {};

const addUser = async () => {};

export default {
  getUsers,
  getUserById,
  getUsersByName,
  getCartsByUserId,
  getPostsByUserId,
  getTodosByUserId,
  addUser,
};
