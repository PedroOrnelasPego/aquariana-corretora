import "./App.scss";

import MenuBar from "./components/MenuBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <MenuBar></MenuBar>
      <Outlet />
    </>
  );
}

export default App;
