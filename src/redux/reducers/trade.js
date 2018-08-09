import {
    handleActions
} from 'redux-actions'
import {
    MARKETPAIR_UPDATED,
    AGGTRADE_UPDATED,
    AGGTRADE_LOADED
} from '../actionTypes';

const initialState = {
    marketPairList: [],
    aggTradeList: new Array()
}
export const trade = handleActions({
    MARKETPAIR_UPDATED(state, action) {
        return {
            ...state,
            marketPairList: action.marketPairList
        }
    },
    AGGTRADE_UPDATED(state, action) {
        let {
            market,
            aggTrade
        } = action;
        let oldAggTradeList = state.aggTradeList || [];
        state.aggTradeList = [];
        oldAggTradeList.unshift(aggTrade);
        oldAggTradeList.pop();
        let aggTradeList = new Array(...oldAggTradeList);
        return {
            ...state,
            aggTradeList: aggTradeList
        }
    },
    AGGTRADE_LOADED(state, action) {
        let {
            market,
            aggTradeList
        } = action;
        let aggTradeListLoaded = aggTradeList.reverse().slice(0, 60);
        return { ...state,
            aggTradeList: aggTradeListLoaded
        }
    }
}, initialState);

export default {
    ...initialState
};
