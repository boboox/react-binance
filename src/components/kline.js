import React from 'react';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment';
import ajax from '@util/ajax';
import { splitMarketPair } from '@util/market';
class Kline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            market: '',
            klineRawData: []
        }
    }
    componentDidMount() {
        let market = this.props.market;
        this.setState({ market: market });
        this.loadKline(market);
    }
    loadKline(market) {
        ajax.get('/api/v1/klines', {
            limit: 100,
            symbol: market,
            interval: '1d',
            startTime: (+ new Date()) - 24 * 30 * 3600 * 1000
        }).then(data => {
            this.setState({ klineRawData: data });
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        let shouldRender = (nextProps.market != this.state.market) || (nextState.klineRawData.length != this.state.klineRawData.length);
        if (shouldRender) {
            console.log('Component Kline SCU() return true');
        }
        return shouldRender;
    }
    render() {
        let market = this.state.market;
        let [leftM, rightM] = splitMarketPair(market);

        let dataArray = [], dateArray = [];
        this.state.klineRawData.forEach(element => {
            let [date, low, highest, lowest, high] = element;
            dataArray.push([low, high, lowest, highest])
            dateArray.push(moment(date).format('YYYY-MM-DD'))
        });
        let option = {
            title: {
                text: `${leftM}/${rightM}`,
                left: 0
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            xAxis: {
                data: dateArray
            },
            yAxis: {
                scale: true
            },
            series: [{
                type: 'k',
                data: dataArray,
                markPoint: {
                    name: '日k',
                    data: [
                        {
                            name: 'highest value',
                            type: 'max',
                            valueDim: 'highest'
                        },
                        {
                            name: 'lowest value',
                            type: 'min',
                            valueDim: 'lowest'
                        }
                    ]
                }
            }],

        };
        return (
            <div className='examples'>
                <ReactEcharts
                    ref='echarts_react'
                    option={option}
                    style={{ height: 400 }} />
            </div>
        );
    }
}
export default Kline;
