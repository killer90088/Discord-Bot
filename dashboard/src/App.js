import "./App.css";
import { Button } from "@chakra-ui/core";
import { Switch, Route } from "react-router-dom";
import { DashboardPage, LandingPage, MenuPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true} component={LandingPage} />
        <Route path="/dashboard" exact={true} component={DashboardPage} />
        <Route path="/menu" exact={true} component={MenuPage} />
      </Switch>
    </div>
  );
}

export default App;
