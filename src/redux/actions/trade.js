import {
    MARKETPAIR_UPDATED,
    ORDERBOOK_UPDATED,
    ORDERBOOK_LOADED,
    AGGTRADE_UPDATED,
    AGGTRADE_LOADED
} from '../actionTypes'

export const orderBookLoaded = (market, data) => {
    return (dispatch) => {
        dispatch({
            type: ORDERBOOK_LOADED,
            market: market,
            orderBook: data
        })
    }
}

export const orderBookUpdated = (market, data) => {
    return (dispatch) => {
        dispatch({
            type: ORDERBOOK_UPDATED,
            market: market,
            orderBookDiff: data
        })
    }
}
export const aggTradeUpdated = (market, data) => {
    return (dispatch) => {
        dispatch({
            type: AGGTRADE_UPDATED,
            market: market,
            aggTrade: data
        })
    }
}

export const aggTradesListLoaded = (market, data) => {
    return (dispatch) => {
        dispatch({
            type: AGGTRADE_LOADED,
            market: market,
            aggTradeList: data
        })
    }
}

export const marketPairDataUpdated = (data) => {
    return (dispatch) => {
        dispatch({
            type: MARKETPAIR_UPDATED,
            marketPairList: data
        })
    }
}

export default {
    marketPairDataUpdated
}
