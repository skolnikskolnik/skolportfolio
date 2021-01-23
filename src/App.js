import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
