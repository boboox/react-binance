import React from 'react';
import './home.less';
import PropTypes from 'prop-types';
class Home extends React.Component {
    componentDidMount() {
        // this.props.loading(true)
    }
    render() {
        return (
            <div>
                this is page/Home {this.props.loadingStatus}
            </div>
        )
    }
}
// Home.propTypes = {
//     loadingStatus: PropTypes.bool,
//     marketPairList: PropTypes.object,
//     loading: PropTypes.func,
//     onMarketPairDataUpdated: PropTypes.func
// }

export default Home;
