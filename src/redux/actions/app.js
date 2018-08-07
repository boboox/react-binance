import {
    LOADING_STATUS
} from '../actionTypes'

export function changeLoadingStatus(status) {
    return {
        type: LOADING_STATUS,
        loading: status
    }
}

export default {
    changeLoadingStatus
}
