# 已知问题
- 目前还有内存泄露 高频刷新内存增长很快
- 

# TODO
- webpack prd
- webpack 优化
- ✅ redux
- ✅ router
- ✅ add antd
- ✅ restful
    -  api:https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md
- ✅ websocket
    - https://github.com/binance-exchange/binance-official-api-docs/blob/master/web-socket-streams.md
- unit test
- ✅ aggTrade的update
- depth的diff



## 结构

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
│   ├── api                                 # 预分装API,目前没封
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
