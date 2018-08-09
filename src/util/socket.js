const isDemo = false;
const endPoint = isDemo ? 'wss://stream.binance.com:9443' : 'wss://stream2.binance.cloud'
const path = 'stream'

function createWebSocket(queryString) {
    const url = `${endPoint}/${path}?${queryString}`
    const ws = new WebSocket(url);
    return ws;
}

class BSocket {
    constructor(streamName, cb) {
        this.streamName = streamName;
        this.onMessage = cb;
        this.rawWebSocket = null;
    }
    open() {
        return new Promise((resolve) => {
            if (this.rawWebSocket && this.rawWebSocket.readyState === WebSocket.CONNECTING)
                resolve();
            this.rawWebSocket = createWebSocket(`streams=${this.streamName}`);
            this.rawWebSocket.onmessage = this.onMessage;
            this.rawWebSocket.onopen = resolve;
        });
    }
    close() {
        return new Promise((resolve) => {
            if (!this.rawWebSocket)
                resolve();
            this.rawWebSocket.close();
            this.rawWebSocket.onclose = resolve;
            this.rawWebSocket = null;
        });
    }
}


export default BSocket
