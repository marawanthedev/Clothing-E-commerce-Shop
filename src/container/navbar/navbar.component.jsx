import "./navbar.styles.scss";
import { Link } from "react-router-dom";
// we are importing this so we can sign-out using the header
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
// cart actions
// we need to let the header know if there is user in session or not
// which can be done by passing the current user from app to the header as a prop
// redux state
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ToggleCartDropDown } from "../../redux/cart/cart.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, itemCount, dispatch, ...other }) => {
  return (
    <nav className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {/* only displayed when there is no user in session */}
        {!currentUser ? (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        ) : (
          // sign-out is changing auth state btw
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        )}
        <CartIcon
          //short hand for dispatch calls
          toggleCartDropDownCallBack={() => dispatch(ToggleCartDropDown())}
          itemCount={itemCount}
        ></CartIcon>
      </div>
      <CartDropDown></CartDropDown>
    </nav>
  );
};

// nested destructuring

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(Header);
