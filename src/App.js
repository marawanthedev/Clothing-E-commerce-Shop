import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import CheckoutForm from "./components/checkout/checkoutForm";
import { Switch, Route, Redirect } from "react-router-dom";
import SignUpAndSignIn from "./pages/sign-in-up/sign-in-up.component";
import React from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// i do have the connect method imported
import { connect } from "react-redux";
// but we neeed to import the required actions to make to set a prop
import { setCurrentUser } from "./redux/user/user.actions";
// actions are recieved as a prop

class App extends React.Component {
  // ** state is replaced by redux
  unsubscribeFromAuth = null;
  // understanding subscribition is key to understanding firebase auth
  componentDidMount() {
    // note#1
    // destructruing a prop
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
        // if there is not user authed
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
      <div>
        {/* note#3 */}
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/checkout"> <CheckoutForm/></Route>

          {/* in order to apply redirect path has to exact */}
          {/* and use render instead of component */}
          {/* and this will be conditinally rendering a component depending on the userstate */}
          {/* way 1 */}
          {/* <Route exact path="/signin" render={this.props.currentUser?HomePage:SignUpAndSignIn}></Route> */}
          {/* way2 */}
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

// **the first argument of the first function call
// is the props that we need it to be passed to our component
// **2nd argument is the props that we need to set in our root reducer
// using our componnet
const mapDispatchToProps = (dispatch) => ({
  // *so right now we are dispatching an object
  // which is formulated at current user action.js
  // so now i am passing user to it and this function does actually
  //* return an action object which contains the type and payload
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  // **its more like dispatch(type="setcurrent user" payload:user)
});

// state gets passed to here so we are destructruing our user resolvers
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
// **anything is being passed as aprop
// either action or getters
// **its all props
export default connect(mapStateToProps, mapDispatchToProps)(App);
