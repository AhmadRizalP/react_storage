import "./App.css";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React, { Component, Fragment } from "react";

import Galeri from "./Pages/Galeri";
import Cart from "./Pages/Cart";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <header>
            <div>
              <Link to="/galeri" className="link">
                Galer1
              </Link>
              <Link to="/cart" className="link">
                Cart
              </Link>
            </div>
          </header>

          <Switch>
            <Route path="/galeri" exact component={Galeri} />
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

export default App;
