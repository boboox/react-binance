import React from 'react';
import './home.less';
import PropTypes from 'prop-types';
import { Table, Switch } from 'antd';
import { Link } from 'react-router-dom'
import BSocket from '@util/socket';
let miniTickerWS;


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
    constructor(props) {
        super(props)
        this.state = {
            wsSwitch: -1
        }
    }
    componentDidMount() {
        miniTickerWS = new BSocket('!miniTicker@arr@3000ms', (event) => {
            let marketPairList = JSON.parse(event.data).data;
            this.props.marketPairDataUpdated(marketPairList);
        });
        miniTickerWS.open().then(() => {
            this.setState({ wsSwitch: 1 })
        });
    }
    componentWillUnmount() {
        miniTickerWS.close();
    }
    handleWebSocketSwitchChange(checked) {
        this.setState({ wsSwitch: -1 })
        if (checked) {
            miniTickerWS.open().then(() => {
                this.setState({ wsSwitch: 1 })
            });
        }
        else {
            miniTickerWS.close().then(() => {
                this.setState({ wsSwitch: 0 })
            })
        }
    }
    render() {
        return (
            <div>
                <div className='switch-wrapper'>
                    数据流开关&nbsp;&nbsp;<Switch onChange={this.handleWebSocketSwitchChange.bind(this)} disabled={this.state.wsSwitch === -1} defaultChecked />
                </div>
                <Table rowKey={record => record.s} columns={columns} dataSource={this.props.marketPairList} size='small' pagination={false}></Table>
            </div >
        )
    }
}
Home.propTypes = {
    loadingStatus: PropTypes.bool,
    marketPairList: PropTypes.array,
    loading: PropTypes.func,
    marketPairDataUpdated: PropTypes.func
}

export default Home;
