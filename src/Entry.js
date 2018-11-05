import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import createStore from "./redux/create-store";
import { Provider } from "react-redux";
import "./normalize.css";
import "./index.css";
import "./assets/less/font.less";
import App from "./App";
import LoginCom from './pages/Login/Login';
import registerServiceWorker from "./registerServiceWorker";

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Entry />
        </Router>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
