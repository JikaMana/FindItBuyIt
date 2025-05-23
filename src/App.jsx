import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { SearchResults } from "./pages/SearchResults";
import { ProductDetails } from "./pages/ProductDetails";
import { UserProfile } from "./pages/UserProfile";
import { StoresPage } from "./pages/StoresPage";
import useProducts from "./hooks/useProducts";
import { StoreDetailsPage } from "./pages/StoreDetailsPage";
import { CategoriesPage } from "./pages/CategoriesPage";
import { DealsPage } from "./pages/DealsPage";
import RecentAndSaved from "./pages/RecentAndSaved";
import HelpPage from "./pages/HelpPage";
// import { HelpPage } from './pages/HelpPage';

function App() {
  const { allProducts, featuredProducts, loading, error } = useProducts();
  // console.log(featuredProducts);

  return (
    <Router>
      <Layout children={undefined}>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<HomePage featuredProducts={featuredProducts} />}
          />
          <Route path="/search" element={<SearchResults />} />
          <Route
            path="/product/:id"
            element={
              <ProductDetails
                // featuredProducts={featuredProducts}
                allProducts={allProducts}
              />
            }
          />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/stores" element={<StoresPage />} />
          <Route path="/stores/:id" element={<StoreDetailsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/recents" element={<RecentAndSaved />} />
          <Route path="/help" element={<HelpPage />} /> */
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
