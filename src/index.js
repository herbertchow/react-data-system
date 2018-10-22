import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createStore from "./redux/create-store";
import { Provider } from "react-redux";
import "./normalize.css";
import "./index.css";
import "./assets/less/font.less";
import App from "./App";
import App2 from "./App2";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/haha" component={App2} />
            </div>
        </Router>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
