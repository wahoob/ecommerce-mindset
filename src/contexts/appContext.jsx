import { createContext, useEffect, useState } from "react";
import {
  getAllCategories,
  getAllProducts,
  getProduct,
  getProductsByCategory,
  signIn,
} from "../api/api";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [pages, setPages] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      setIsCategoriesLoading(true);
      setIsError(false);
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsCategoriesLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsProductsLoading(true);
      setIsError(false);
      const skip = (currentPage - 1) * limit;
      try {
        const data = selectedCategory
          ? await getProductsByCategory(selectedCategory, limit, skip)
          : await getAllProducts(limit, skip);
        setProducts(data.products);
        setTotal(data.total);
        setPages(Math.ceil(data.total / limit));
      } catch (err) {
        setIsError(true);
      } finally {
        setIsProductsLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, selectedCategory, limit]);

  const fetchSingleProduct = async (id) => {
    try {
      const product = await getProduct(id);
      return product;
    } catch (err) {
      return err;
    }
  };

  const handlesignIn = async (username, password) => {
    setIsUserLoading(true);
    setIsError(false);
    try {
      const userData = await signIn(username, password);
      setUser(userData);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsUserLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const changeCategory = async (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <AppContext.Provider
      value={{
        categories,
        products,
        user,
        isCategoriesLoading,
        isProductsLoading,
        isUserLoading,
        isError,
        pages,
        total,
        currentPage,
        selectedCategory,
        changeCategory,
        changePage,
        fetchSingleProduct,
        handlesignIn,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
