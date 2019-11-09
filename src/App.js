import React from "react";
import "./App.css";
import Landing from "./components/landing";
import IncidentDetails from "./components/information";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import {Provider} from 'react-redux'
import store from '../src/reducer/store'
function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/incidents/:id" component={IncidentDetails} />
          <Route exact strict path="/incidents" component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
