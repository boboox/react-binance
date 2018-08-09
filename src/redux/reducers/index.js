import {
    combineReducers
} from 'redux';
import {
    routerReducer
} from 'react-router-redux';
import * as app from './app'
import appInitialState from './app';

import * as trade from './trade'
import tradeInitialState from './trade';

import * as orderbook from './orderbook'
import orderbookInitialState from './orderbook';

const rootReducer = combineReducers({
    router: routerReducer,
    ...app,
    ...trade,
    ...orderbook
})


export const initialState = {
    app: appInitialState,
    trade: tradeInitialState,
    orderbook: orderbookInitialState
}
export default rootReducer
