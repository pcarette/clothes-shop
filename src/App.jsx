import { useContext } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import "./category.sass.scss";
import Home from "./routes/home/home.component";
import Navbar from "./components/Navbar/Navbar";
import Authentication from "./routes/authentication/authentication.component";
import { UserContext } from "./contexts/user.context";
import Shop from './components/shop/shop.component'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
