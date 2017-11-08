import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import rootReducer from './reducers';   //from './reducers/index';
import promise from 'redux-promise';

import App from './components/app';

ReactDOM.render(
    <Provider store={createStore(rootReducer, {}, applyMiddleware(promise))}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
