import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { Switch, Route } from "react-router-dom";
import SignUpAndSignIn from "./pages/sign-in-up/sign-in-up.component";
import React from "react";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  // understanding subscribition is key to understanding firebase auth
  componentDidMount() {
    // fetch to backend
    // auth takes a function with a paramter user
    // user of auth
    // this stay on all the time
    // which might cause memory leaks
    // so we need to unsub to avoid memory leaks
    // this will return a function that closes the sub when we call it
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      // firebase sends authenticated user as  a func arugment
      // and then we could use that arguemnt in our inner call back
      // to make changes to the state
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        {/* component to render homepage at default path */}
        {/* exact means that path be exactly equal to provided path */}
        {/* means that path shall only be equal to the path and can not have othe stuff at it */}
        {/* switch is used to avoid rendering anything else other than the component corresponding to the url */}
        {/* if many components didnt have exact to true it going to load the first component to be declared
      its gonna depend on arrangement only */}
        {/* switch is so op la */}
        {/* router history is only passed to the rendered component component */}
        {/* so history doesnt actaully get passed to the sub component of a route component
      so we need to do it ourselves by passing it as  a prop to the child components */}
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignUpAndSignIn}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
