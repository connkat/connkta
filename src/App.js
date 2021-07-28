import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Resources } from "./components";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/resources" exact component={() => <Resources />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
