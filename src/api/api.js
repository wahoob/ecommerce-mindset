import axios from "axios";

const API_BASE_URL = "https://dummyjson.com";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signIn = async (username, password) => {
  try {
    const response = await apiClient.post("/user/login", {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAllProducts = async (limit = 12, skip = 0) => {
  try {
    const response = await apiClient.get(
      `/products?limit=${limit}&skip=${skip}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProduct = async (productId) => {
  try {
    const response = await apiClient.get(`/products/${productId}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getProductsByCategory = async (category, limit = 12, skip = 0) => {
  try {
    const response = await apiClient.get(
      `/products/category/${category}?limit=${limit}&skip=${skip}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAllCategories = async () => {
  try {
    const response = await apiClient.get("/products/categories");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
