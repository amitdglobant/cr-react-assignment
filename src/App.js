import React from "react";
import "./App.css";
import IncidentDetails from "./components/information";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import incidentListContainer from "./components/incidentList/incidentListContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/incidents/:id" component={IncidentDetails} />
          <Route exact strict path="/incidents" component={incidentListContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
