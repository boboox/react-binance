import React from 'react';
import './home.less';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { Link } from 'react-router-dom'
import webSocket from '../../util/socket';
const miniTickerWS = webSocket.connection('!miniTicker@arr@3000ms');


const columns = [{
    title: '市场',
    dataIndex: 's',
    render: (symbol, record) => (
        <Link to={"/trade/" + symbol} >{symbol}</Link>
    )
}, {
    title: '当前最新价',
    dataIndex: 'c',
}, {
    title: '24小时最高价',
    dataIndex: 'h',
}, {
    title: '24小时最低价',
    dataIndex: 'l',
}];

class Home extends React.Component {
    componentDidMount() {
        miniTickerWS.onmessage = (event) => {
            let marketPairList = JSON.parse(event.data).data;
            this.props.onMarketPairDataUpdated(marketPairList);
        }
    }
    onRowClick(rowData, index) {
        console.log(rowData)
    }
    render() {
        return (
            <div>
                <Table rowKey={record => record.s} columns={columns} dataSource={this.props.marketPairList} size='small' pagination={false}></Table>
            </div >
        )
    }
}
Home.propTypes = {
    loadingStatus: PropTypes.bool,
    marketPairList: PropTypes.array,
    loading: PropTypes.func,
    onMarketPairDataUpdated: PropTypes.func
}

export default Home;
