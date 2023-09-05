import { Outlet } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
    </>
  );
}

export default App;
