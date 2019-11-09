import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Landing from "./components/landing";
import IncidentDetails from "./components/information";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import configureStore from "./store/store";

export const store = configureStore();

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
          <Switch>
            <Route exact path="/incidents/:id" component={IncidentDetails} />
            <Route exact strict path="/incidents" component={Landing}  />
          </Switch>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
