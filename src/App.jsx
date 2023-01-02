import { useContext } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import "./category.sass.scss";
import Home from "./routes/home/home.component";
import Navbar from "./components/Navbar/Navbar";
import Authentication from "./routes/authentication/authentication.component";
import { UserContext } from "./contexts/user.context";

const Shop = () => {
  const { currentUser } = useContext(UserContext);

  function displayUser() {
    console.log(currentUser);
  }

  return (
    <div>
      <h1>Ne sachant pas encore quoi faire de cette page, je m'en sers pour quelques tests concernant le Context React</h1>
      <button onClick={displayUser}>Test console log user</button>
    </div>
  );
};

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
