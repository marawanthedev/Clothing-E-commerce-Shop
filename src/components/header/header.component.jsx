import Reactc from "react";
import "./header.styles.scss";
import {Link} from "react-router-dom"
// we are importing this so we can signout using the header
import {auth} from "../../firebase/firebase.utils";
import {ReactComponent as Logo} from "../../assets/crown.svg";
// we need to let the header know if there is user in session or not
// which can be done by passing the current user from app to the header as a prop
// redux state
import {connect} from "react-redux"

const Header =({currentUser})=>{

    return <div className="header">

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

        </div>
    </div>
}
// it returns an objcet
// where name of prop is the name of prop that we want to pass in
// the passed state is the root reducer
// and then we work our way to the info we need 
const mapStateToProps=(state)=>({
    // thats whats actually happening
    // bcs right now my state is the root reducer itself
    // currentUser:rootreducer.user.currentUser
    currentUser:state.user.currentUser
    // its similar to apis

})
// function that allows us to access the state
// we are passing the prop that we need and also the component that we need the prop to be passed to
export default connect(mapStateToProps)(Header);