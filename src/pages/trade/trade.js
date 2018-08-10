import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Divider } from 'antd';
import { Layout, Switch } from 'antd';
const { Header, Content } = Layout;
import Kline from '@comp/kline';
import moment from 'moment';
import './trade.less';

import ajax from '@util/ajax';
import BSocket from '@util/socket';
import { splitMarketPair } from '@util/market';
import { accMul } from '@util/math';
let aggTradeWS;


class Trade extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wsSwitch: -1
        }
    }
    componentDidMount() {
        let market = this.props.match.params.symbol;
        this.loadDepth(market);
        this.loadAggTrades(market);
    }
    loadAggTrades(market) {
        ajax.get('/api/v1/aggTrades', {
            limit: 80,
            symbol: market
        }).then(data => {
            this.props.aggTradesListLoaded(market, data);
        }).then(() => {
            aggTradeWS = new BSocket(`${market.toLowerCase()}@aggTrade`, (event) => {
                let aggTradeUpdated = JSON.parse(event.data).data;
                this.props.aggTradeUpdated(market, aggTradeUpdated);
            });
            aggTradeWS.open().then(() => {
                this.setState({ wsSwitch: 1 });
            });
        });
    }
    loadDepth(market) {
        ajax.get('/api/v1/depth', {
            limit: 100,
            symbol: market
        }).then(data => {
            this.props.orderBookLoaded(market, data);
        });
    }
    handleWebSocketSwitchChange(checked) {
        this.setState({ wsSwitch: -1 })
        if (checked) {
            aggTradeWS.open().then(() => {
                this.setState({ wsSwitch: 1 })
            });
        }
        else {
            aggTradeWS.close().then(() => {
                this.setState({ wsSwitch: 0 })
            })
        }
    }
    componentWillUnmount() {
        aggTradeWS.close();
    }
    render() {
        let market = this.props.match.params.symbol;
        let [leftM, rightM] = splitMarketPair(market);
        let ats = this.props.aggTradeList || [];
        let { asks = [], bids = [] } = this.props.orderBookListLocal.get(market) || {};
        return (
            <div>
                <div className='switch-wrapper'>
                    数据流开关&nbsp;&nbsp;<Switch onChange={this.handleWebSocketSwitchChange.bind(this)} disabled={this.state.wsSwitch === -1} defaultChecked />
                </div>
                <Kline market={this.props.match.params.symbol} />
                <Layout>
                    <Header><span className='leftmarket'>{leftM}</span><span className='rightmarket'> / {rightM}</span></Header>
                    <Content>
                        <Row gutter={24}>
                            <Col span={8}>
                                <Divider>AGGTRADES</Divider>
                                <Row className='row-style--title'>
                                    <Col className='al-c' span={24}>最新成交</Col>
                                </Row>
                                {
                                    ats.map(t =>
                                        <Row key={t.f}>
                                            <Col className={['al-l', t.m ? 'col-style--buyer' : 'col-style--seller'].join(' ')} span={12}>{t.p}</Col>
                                            <Col className='al-r' span={6}>{t.q}</Col>
                                            <Col className='al-r' span={6}>{moment(t.T).format('HH:mm:ss')}</Col>
                                        </Row>
                                    )
                                }
                            </Col>
                            <Col span={8}>
                                <Divider>BID</Divider>
                                <Row className='row-style--title'>
                                    <Col className='al-l' span={12}>价格({rightM})</Col>
                                    <Col className='al-r' span={4}>数量({leftM})</Col>
                                    <Col className='al-r' span={8}>成交金额({rightM})</Col>
                                </Row>
                                {
                                    bids.map(bid =>
                                        <Row className='row-style--seller' key={bid[0]}>
                                            <Col className='al-l' span={12}>{bid[0]}</Col>
                                            <Col className='al-r' span={4}>{bid[1]}</Col>
                                            <Col className='al-r' span={8}>{accMul(bid[0], bid[1])}</Col>
                                        </Row>
                                    )
                                }
                            </Col>
                            <Col span={8}>
                                <Divider>ASK</Divider>
                                <Row className='row-style--title'>
                                    <Col className='al-l' span={12}>价格({rightM})</Col>
                                    <Col className='al-r' span={4}>数量({leftM})</Col>
                                    <Col className='al-r' span={8}>成交金额({rightM})</Col>
                                </Row>
                                {
                                    asks.map(ask =>
                                        <Row className='row-style--buyer' key={ask[0]}>
                                            <Col className='al-l' span={12}>{ask[0]}</Col>
                                            <Col className='al-r' span={4}>{ask[1]}</Col>
                                            <Col className='al-r' span={8}>{accMul(ask[0], ask[1])}</Col>
                                        </Row>
                                    )
                                }
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </div>
        )
    }
}

Trade.propTypes = {
    orderBookLoaded: PropTypes.func,
    orderBookListLocal: PropTypes.object,
    aggTradesListLoaded: PropTypes.func,
    aggTradeUpdated: PropTypes.func,
    aggTradeList: PropTypes.array
}

export default Trade;
