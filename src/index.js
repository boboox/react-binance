import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';
import store from './redux/store';
import DevTools from './util/devTool'
import App from './pages/app';
import './index.less';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

const history = createHistory()

ReactDOM.render(
    <Provider store={store}>
        {/* <ConnectedRouter history={history}> */}
            <div>
                <App />
                <DevTools />
            </div>
        {/* </ConnectedRouter> */}
    </Provider>,
    document.getElementById('root')
)
