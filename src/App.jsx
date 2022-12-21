import { Route, Routes, Outlet } from "react-router-dom";
import "./category.sass.scss";
import Home from "./routes/home/home.component";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./routes/sign-in/sign-in.component";


const Shop = () => {
  return (
    <h1>Bah alors doudou, tu viens plus aux soirées</h1>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;