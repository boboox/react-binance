import {
    connect
} from 'react-redux'
import Trade from './trade';
import {
    changeLoadingStatus
} from '../../redux/actions/app';
const mapStateToProps = (state) => {
    return {
        // loadingStatus: state.app.loading
    }
}
const mapDispatchToProps = {
    // loading: (status) => changeLoadingStatus(status)
}

export default connect(mapStateToProps, mapDispatchToProps)(Trade);
