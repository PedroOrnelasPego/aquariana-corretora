import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Seguros from "./Pages/Seguros";
import ErrorPage from "./Pages/ErrorPage";
import Commodities from "./pages/Commodities/Commodities.jsx";
import Condominios from "./pages/Condominios/Condominios.jsx";
import Consorcios from "./pages/Consorcios/Consorcios.jsx";
import Aluguel from "./pages/Imoveis/Aluguel/Aluguel.jsx";
import Vendas from "./pages/Imoveis/Vendas/Vendas.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/seguros",
        element: <Seguros />,
      },
      {
        path: "/imoveis-aluguel",
        element: <Aluguel />,
      },
      {
        path: "/imoveis-vendas",
        element: <Vendas />,
      },
      {
        path: "/condominios",
        element: <Condominios />,
      },
      {
        path: "/consorcios",
        element: <Consorcios />,
      },
      {
        path: "/commodities",
        element: <Commodities />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
