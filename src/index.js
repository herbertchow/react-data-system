import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import createStore from "./redux/create-store";
import { Provider } from "react-redux";
import "./assets/less/lib/normalize.css";
import "./assets/less/index.less";
import Entry from "./Entry";

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
