import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import rootReducer from './reducers';   //from './reducers/index';
import promise from 'redux-promise';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';

ReactDOM.render(
    <Provider store={createStore(rootReducer, {}, applyMiddleware(promise))}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
