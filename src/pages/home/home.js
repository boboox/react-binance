import React from 'react';
import {
    Layout
} from 'antd';
// import PropTypes from 'prop-types';

class Home extends React.Component {
    componentDidMount() {
        this.props.loading(true);
    }
    render() {
        return (
            <Layout className="containAll">
                this is home page
                <div>current loading status:{this.props.loadingStatus.toString()}</div>
            </Layout>
        )
    }
}

export default Home;
