import Admin from "./AdminDashboard/Admin";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Singleproduct from "./Components/Singleproduct";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import Navigationbar from "./Components/Navigation";
import { useState } from "react";
import About from "./Components/About";
import Order from "./Components/Order";
import OrderList from "./AdminDashboard/OrderList";

import { AuthProvider, UserAuth } from "./Auth/AuthContext";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import ProtectedRoutes from "./Auth/ProtectedRoute";
import Profile from "./Components/Profile";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navigationbar setSearch={setSearch} search={search} />
          <Routes>
            <Route
              path="/"
              element={
                
                  <Products search={search} setSearch={setSearch} />
                
              }
            />
            <Route
              path="/admindashboard"
              element={<Admin setSearch={setSearch} search={search} />}
            />
            <Route path="/product/:id" element={<Singleproduct />} />
            <Route
              path="/cart"
              element={<Cart search={search} setSearch={setSearch} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/yourorderlist" element={<OrderList />} />
            <Route path="/userprofile" element={<Profile/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
