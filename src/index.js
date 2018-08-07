import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';
import store from './redux/store';
import DevTools from './util/devTool'
import App from './pages/app';
import './index.less'

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            {/* <DevTools /> */}
        </div>
    </Provider>,
    document.getElementById('root')
)
