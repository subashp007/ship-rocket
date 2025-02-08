import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fulfilllment from "./pages/Product/Fulfilllment.jsx";
import Home from "./pages/Home.jsx";
import DomesMain from "./pages/Product/DomesMain.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {path:"/domestic-shipping",element:<DomesMain/>},
  { path: "/fulfillment", element: <Fulfilllment /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
