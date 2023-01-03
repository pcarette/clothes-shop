import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import './Navbar.sass.scss'

import {ReactComponent as Crwnlogo} from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";


const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
  return (
    <Fragment>
      <div className="navbar">
        <Link className="logo-container" to='/'>
          <Crwnlogo className='logo' />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <a href="#">SHOP</a>
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ):(
          <Link className="nav-link" to="/auth">
            <a href="#">SIGN IN</a>
          </Link>
          )}
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar