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



const rootReducer = combineReducers({
    router: routerReducer,
    ...app,
    ...trade
})


export const initialState = {
    app: appInitialState,
    trade: tradeInitialState
}
export default rootReducer
