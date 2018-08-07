import {
    handleActions
} from 'redux-actions'
import {
    LOADING_STATUS
} from '../actionTypes';

const initialState = {
    loading: false
}
export const app = handleActions({
    LOADING_STATUS(state, action) {
        console.log(state, action);
        return {
            loading: action.loading
        }
    }
}, initialState);

export default {
    ...initialState
};
