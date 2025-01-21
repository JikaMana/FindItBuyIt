import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { SearchResults } from "./pages/SearchResults";
import { ProductDetails } from "./pages/ProductDetails";
import { UserProfile } from "./pages/UserProfile";
import { StoresPage } from "./pages/StoresPage";
// import { CategoriesPage } from './pages/CategoriesPage';
// import { DealsPage } from './pages/DealsPage';
// import { CartPage } from './pages/CartPage';
// import { HelpPage } from './pages/HelpPage';

function App() {
  return (
    <Router>
      <Layout children={undefined}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/stores" element={<StoresPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
{
  /* <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/help" element={<HelpPage />} /> */
}
