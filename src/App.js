import React from "react";
import configureStore from "./store";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/index";
import DogExample from "./components/dog";
import Starwars from "./components/starwars";
import "./App.css";

let store = configureStore();
let history = createBrowserHistory();

const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/dogs" component={DogExample} />
                <Route path="/starwars" component={Starwars} />
                <Route component={HomePage} />
            </Switch>
        </Router>
    </Provider>
);

export default App;
