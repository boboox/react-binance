const isDemo = false;
const wsPool = {};
const endPoint = isDemo ? 'wss://stream.binance.com:9443' : 'wss://stream2.binance.cloud'
const path = 'stream'


function createWebSocket(queryString) {
    const url = `${endPoint}/${path}?${queryString}`
    const ws = new WebSocket(url);
    return ws;
}

function connection(streamQuery) {
    let key = `streams=${streamQuery}`
    let ws;
    if (wsPool[key]) {
        ws = wsPool[key];
    } else {
        ws = createWebSocket(key);
        wsPool[key] = ws;
    }
    return ws;
}


export default {
    connection
}
