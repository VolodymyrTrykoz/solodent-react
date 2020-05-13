import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import store from './store';
import App from './app';
import './styles/main.scss';

ReactDOM.render(
    <Provider
        store={store}
    >
        <App />
    </Provider>, document.getElementById('root'));

