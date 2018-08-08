import {
    connect
} from 'react-redux'
import Home from './home';
import {
    changeLoadingStatus
} from '../../redux/actions/app';
import {
    onMarketPairDataUpdated
} from '../../redux/actions/trade';


// console.log(changeLoadingStatus);
const mapStateToProps = (state) => {
    return {
        loadingStatus: state.app.loading,
        marketPairList: state.trade.marketPairList
    }
}

const mapDispatchToProps = {
    loading: (status) => changeLoadingStatus(status),
    onMarketPairDataUpdated
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
