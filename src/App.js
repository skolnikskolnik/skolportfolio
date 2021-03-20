import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App () {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path = {["/", "/skolportfolio"]}>
            <HomePage />
          </Route>
          <Route exact path = "/portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;