import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <HashRouter basename="/skolportfolio/">
      <div>
        <NavBar />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
