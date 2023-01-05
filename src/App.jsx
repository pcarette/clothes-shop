import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { Route, Routes, Outlet } from "react-router-dom";
import "./category.sass.scss";
import Home from "./routes/home/home.component";
import Navbar from "./components/Navbar/Navbar";
import Authentication from "./routes/authentication/authentication.component";
import { UserContext } from "./contexts/user.context";
import Shop from "./components/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from './store/user/user.action'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
