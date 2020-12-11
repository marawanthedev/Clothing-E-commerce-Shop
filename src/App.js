import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};
function App() {
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
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
