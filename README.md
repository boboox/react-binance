# react demo

react@16 + redux + router + jest/enzyme

## run

### 安装
```
npm i
```

### 运行
```
npm run dev
```
@@@@@目前没有写生成打包的配置@@@@@


### devTool

需要启用devTool的话,在src/index.js中拿掉注释即可
```javascript
 {/* <DevTools /> */}
```

## bug
- 目前还有内存泄露 websocket高频刷新内存增长很快,可能数据走redux是不合适的?

## 调用接口描述
- home
    - wss://stream2.binance.cloud/stream?streams=!miniTicker@arr@3000ms
- trade
    - https://www.binance.co/api/v1/depth?limit=100&symbol=ETHBTC
    - https://www.binance.co/api/v1/aggTrades?limit=80&symbol=ETHBTC
    - wss://stream2.binance.cloud/stream?streams=ethbtc@aggTrade

## TODO
- webpack prd
- webpack 优化
- ✅ redux
- ✅ router
- ✅ add antd
- ✅ restful
    -  api:https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md
- ✅ websocket
    - https://github.com/binance-exchange/binance-official-api-docs/blob/master/web-socket-streams.md
- ✅ unit test
- ✅ aggTrade的update
- depth的diff



## Project Structure

```
├── README.md
├── build
│   ├── dev-client.js
│   ├── dev-server.js
│   └── webpack.config.js
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── __tests__                           # test enzyme jest
│   │   └── app-header.test.js              # test
│   ├── api                                 # 预分装API,目前没封
│   ├── components                          # 组件
│   │   └── app-header.js
│   ├── index.js
│   ├── index.less
│   ├── pages
│   │   ├── app.js   # 
│   │   ├── app.less
│   │   ├── home
│   │   │   ├── container.js
│   │   │   ├── home.js
│   │   │   └── home.less
│   │   └── trade
│   │       ├── container.js
│   │       ├── trade.js
│   │       └── trade.less
│   ├── redux
│   │   ├── actionTypes.js
│   │   ├── actions
│   │   │   ├── app.js
│   │   │   ├── index.js
│   │   │   └── trade.js
│   │   ├── reducers
│   │   │   ├── app.js
│   │   │   ├── index.js
│   │   │   ├── orderbook.js
│   │   │   └── trade.js
│   │   └── store
│   │       └── index.js
│   └── util                                # 工具
│       ├── ajax.js                         # ajax
│       ├── devTool.js                      # redux dev tool
│       ├── market.js                       
│       ├── math.js
│       └── socket.js                       # websocket包装类
├── stream-response.json
└── tests                                   # 单元测试
```
