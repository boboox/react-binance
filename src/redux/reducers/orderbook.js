import {
    handleActions
} from 'redux-actions'
import {
    ORDERBOOK_UPDATED,
    ORDERBOOK_LOADED
} from '../actionTypes';

// 用map有内存泄露?还么想好怎么改
const initialState = {
    orderBookListLocal: new Map(),
    orderBookDiff: new Map()
}
export const orderbook = handleActions({
    ORDERBOOK_LOADED(state, action) {
        let {
            market,
            orderBook
        } = action;
        let orderbookLoaded = new Map();
        orderbookLoaded.set(market, orderBook);
        return { ...state,
            orderBookListLocal: orderbookLoaded
        }
    },
    ORDERBOOK_UPDATED(state, action) {
        let {
            market,
            orderBookDiff
        } = action;
        let orderBookUpdated = new Map();
        orderBookUpdated.set(market, orderBookDiff);
        return { ...state,
            orderBookDiff: orderBookUpdated
        }
    }
}, initialState);

export default {
    ...initialState
};
