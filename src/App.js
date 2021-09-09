import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop.component";
import Header from "./container/navbar/navbar.component";
import CheckoutForm from "./pages/checkout/checkout";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUpAndSignIn from "./pages/sign-in-up/sign-in-up.component";
import React from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// i do have the connect method imported
import { connect } from "react-redux";
// but we need to import the required actions to make to set a prop
import { setCurrentUser } from "./redux/user/user.actions";
import { ToggleCartDropDown } from "./redux/cart/cart.actions";

class App extends React.Component {
  handleCartToggle = (e) => {
    if (this.props.showCart === true) {
      // this.props.ToggleCartDropDown();
    }
  };
  // ** state is replaced by redux
  unsubscribeFromAuth = null;
  // understanding subscribition is key to understanding firebase auth
  componentDidMount() {
    // note#1
    // destructuring a prop
    const { setCurrentUser } = this.props;
    // this tracks any auth changes which means if i singed out otu header
    // a change will be happening to the state which is gonna fire this function again and update the state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // note#2

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // note#4(preredux)
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
        //** */ all of that is replaced by redux
        // *code is down below
        // on snap shot updates in case of snapshot updates and also returns a copy of the snapshot
        // (await userRef).onSnapshot((snapshot) => {
      } else {
        // if there is not user authorized
        // set current user takes the object directly
        // bcs its already mapped to the user at the resolver
        // using the currentUser:action.payload
        // and in thise case payload is the passed object
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div
        onClick={() => {
          this.handleCartToggle();
        }}
      >
        {/* note#3 */}
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/checkout">
            {" "}
            <CheckoutForm />
          </Route>

          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUpAndSignIn />
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  ToggleCartDropDown: () => dispatch(ToggleCartDropDown()),
});

const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser,
  showCart: cart.showCart,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
