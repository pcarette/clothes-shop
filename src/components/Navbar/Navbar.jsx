import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './Navbar.sass.scss'

import {ReactComponent as Crwnlogo} from '../../assets/crown.svg'

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <Link className="logo-container" to='/'>
          <Crwnlogo className='logo' />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <a href="">SHOP</a>
          </Link>
          <Link className="nav-link" to="/signin">
            <a href="">SIGN IN</a>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar