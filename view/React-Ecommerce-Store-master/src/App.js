import "./App.css";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./store/actions/productAction";
import Signup from "./pages/Signup";
import Toastify from "./component/Toastify";
import Dashboard from "./pages/Admin/Dashboard";
import About from "./pages/About";
import { GlobalProvider } from "./context/noteContext";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Navbar />
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="*" element={<center><br /><h3>Page not found: 404!</h3></center>} />
        </Routes>
      </GlobalProvider>
      <Toastify />
    </>
  );
}

export default App;
