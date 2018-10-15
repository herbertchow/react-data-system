import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/create-store'
import { Provider } from 'react-redux'
import './normalize.css'
import './index.css';
import './assets/less/font.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
registerServiceWorker();


