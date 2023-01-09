import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './Navbar.sass.scss'
import {ReactComponent as Crwnlogo} from '../../assets/crown.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from '../../store/user/user.selector'
import {selectIsCartOpen} from '../../store/cart/cart.selector'


const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  return (
    <Fragment>
      <div className="navbar">
        <Link className="logo-container" to='/'>
          <Crwnlogo className='logo' />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ):(
          <Link className="nav-link" to="/auth">
            SIGN IN
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