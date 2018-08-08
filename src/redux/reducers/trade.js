import {
    handleActions
} from 'redux-actions'
import {
    MARKETPAIR_UPDATED
} from '../actionTypes';

const initialState = {
    marketPairList: []
}
export const trade = handleActions({
    MARKETPAIR_UPDATED(state, action) {
        // console.log('mpl reducer:', state, action);
        return {
            marketPairList: action.marketPairList
        }
    }
}, initialState);

export default {
    ...initialState
};
