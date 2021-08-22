import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NaviBar from "./Components/Navibar";
import { Home } from "./Home";
import { Gallery } from "./Gallery";
import { About } from "./About";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <NaviBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
