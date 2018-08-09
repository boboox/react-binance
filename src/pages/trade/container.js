import {
    connect
} from 'react-redux'
import Trade from './trade';
import {
    orderBookLoaded,
    aggTradeUpdated,
    aggTradesListLoaded
} from '@actions/trade';
const mapStateToProps = (state) => {
    return {
        orderBookListLocal: state.orderbook.orderBookListLocal,
        aggTradeList: state.trade.aggTradeList
    }
}
const mapDispatchToProps = {
    orderBookLoaded,
    aggTradeUpdated,
    aggTradesListLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(Trade);
