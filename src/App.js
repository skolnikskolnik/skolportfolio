import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
      <NavBar />
        <Wrapper>
          <Route exact path={["/", "/skolportfolio"]} component={HomePage} />
          <Route exact path={["/portfolio", "/skolportfolio/portfolio"]} component={Portfolio} />
          <Route path="*" component={Portfolio}/>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
