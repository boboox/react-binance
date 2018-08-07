import {
    connect
} from 'react-redux'
import Home from './home';
import {
    changeLoadingStatus
} from '../../redux/actions/app';
const mapStateToProps = (state) => {
    return {
        loadingStatus: state.app.loading
    }
}
const mapDispatchToProps = {
    loading: (status) => changeLoadingStatus(status)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
