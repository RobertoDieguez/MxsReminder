import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/menu";
import Home from "./routes/home";
import Events from "./routes/events";
import Rules from "./routes/rules";
import Unsubscribe from "./routes/unsubscribe";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <br />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/rules" component={Rules} />
        <Route path="/unsubscribe" component={Unsubscribe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
