import {
    MARKETPAIR_UPDATED
} from '../actionTypes'

// export function onMarketPairDataUpdated(data) {
//     return {
//         type: MARKETPAIR_UPDATED,
//         marketPairList: data
//     }
// }

export const onMarketPairDataUpdated = (data) => {
    return (dispatch, getState) => {
        dispatch({
            type: MARKETPAIR_UPDATED,
            marketPairList: data
        })
    }
}

export default {
    onMarketPairDataUpdated
}