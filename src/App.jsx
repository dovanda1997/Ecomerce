import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Login from "./router/Login";
import ProductList from "./router/ProductList";
import ShoppingCart from "./router/ShoppingCart";
import Signup from "./router/Signup";
import Root from "./router/root";
import ProductDetail from "./router/ProductDetail";
import AppProvider from "./contax/AppContext";
import ShoppingCartProvide from "./contax/ShoppingCartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <ProductList /> },
      { path: "/products/:productId", element: <ProductDetail /> },
      { path: "/sign-up", element: <Signup /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <AppProvider>
      <ShoppingCartProvide>
        <RouterProvider router={router} />;
      </ShoppingCartProvide>
    </AppProvider>
  );
}

export default App;
