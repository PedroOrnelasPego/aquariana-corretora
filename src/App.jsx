import "./App.scss";

import MenuBar from "./components/MenuBar";
import { Outlet } from "react-router-dom";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <MenuBar />
      <WhatsAppButton />
      <Outlet />
      <Footer className="footer" />
    </div>
  );
}

export default App;
