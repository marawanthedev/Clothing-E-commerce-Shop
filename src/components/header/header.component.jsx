import React from "react";
import "./header.styles.scss";
import {Link} from "react-router-dom"
// we are importing this so we can signout using the header
import {auth} from "../../firebase/firebase.utils";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component"
// cart actions
// we need to let the header know if there is user in session or not
// which can be done by passing the current user from app to the header as a prop
// redux state
import {connect} from "react-redux"
const Header=({currentUser})=>{

    return (<div className="header">
    <Link to ="/" className="logo-container">
<Logo className="logo"></Logo>
    </Link>
<div className="options">
    <Link className="option" to="/shop">SHOP</Link>
    <Link className="option" to="/contact">CONTACT</Link>
    {/* only displayed when there is no user in session */}
    {!currentUser
    ?<Link className="option" to="/signin">Sign In</Link>
    // signout is chaning auth state btw
    :<div className="option" onClick={()=>auth.signOut()}>Sign out</div>}
    <CartIcon></CartIcon>
</div>
<CartDropDown></CartDropDown>
</div>)
}

const mapStateToProps=(state)=>({
    currentUser:state.user.currentUser,
});


export default connect(mapStateToProps)(Header);


