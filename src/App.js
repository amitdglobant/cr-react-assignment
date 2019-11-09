import React from "react";
import "./App.css";
import Landing from "./components/landing";
import IncidentDetails from "./components/information";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import IncidentTable from './components/IncidentModal'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <IncidentTable/>
        <Switch>
          <Route exact path="/incidents/:id" component={IncidentDetails} />
          <Route exact strict path="/incidents" component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
