import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utilities/firebase/firebase.utils";
import './nav.styles.scss'

const Nav = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null)

  }
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
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
            ) : (<Link className="nav-link" to='/auth'>
              SIGN IN
            </Link>
            )}

        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Nav; 