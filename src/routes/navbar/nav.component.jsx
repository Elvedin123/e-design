import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import './nav.styles.scss'
const Nav = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Crwnlogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  ); 
};
export default Nav; 