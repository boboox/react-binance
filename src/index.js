import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';
import store from './redux/store';
import DevTools from './util/devTool'
import Home from './pages/home/container';
import './index.less'

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Home />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
)
