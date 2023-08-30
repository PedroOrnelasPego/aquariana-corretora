import { Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Seguros from "../pages/Seguros";
import ErrorPage from "../pages/ErrorPage";
import Commodities from "../pages/Commodities";
import Condominios from "../pages/Condominios";
import Consorcios from "../pages/Consorcios";
import Aluguel from "../pages/Imoveis/Aluguel";
import Vendas from "../pages/Imoveis/Vendas";
import Contatos from "../pages/Contatos";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/seguros" element={<Seguros />} />
        <Route path="/imoveis-aluguel" element={<Aluguel />} />
        <Route path="/imoveis-vendas" element={<Vendas />} />
        <Route path="/condominios" element={<Condominios />} />
        <Route path="/consorcios" element={<Consorcios />} />
        <Route path="/commodities" element={<Commodities />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
