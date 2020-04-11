import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import store from './store';

import './styles/main.scss';
import App from './app';

ReactDOM.render(
    <Provider
        store={store}
    >
        <App />
    </Provider>, document.getElementById('root'));

