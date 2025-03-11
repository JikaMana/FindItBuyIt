import { useState, useEffect } from "react";

const useProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const API_URL = "http://localhost:4000";

      try {
        const [FEATURED_PRODUCTS, ALL_PRODUCTS] = await Promise.all([
          fetch(`${API_URL}/FEATURED_PRODUCTS`),
          fetch(`${API_URL}/ALL_PRODUCTS`),
        ]);

        if (!FEATURED_PRODUCTS.ok || !ALL_PRODUCTS.ok) {
          throw new Error("Failed to fetch data from the API.");
        }

        const FEATURED_PRODUCTS_DATA = await FEATURED_PRODUCTS.json();
        const ALL_PRODUCTS_DATA = await ALL_PRODUCTS.json();

        setFeaturedProducts(FEATURED_PRODUCTS_DATA);
        setAllProducts(ALL_PRODUCTS_DATA);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { allProducts, featuredProducts, loading, error };
};

export default useProducts;
