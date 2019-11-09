import React from "react";
import "./App.css";
import Landing from "./components/landing";
import IncidentDetails from "./components/information";
import AddIncident from "./components/addIncident";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/incidents/:id" component={IncidentDetails} />
          <Route exact strict path="/incidents" component={Landing} />
          <Route exact path="/incident/add" component={AddIncident} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
