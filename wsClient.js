// src/network/wsClient.js
export class TopologyWebSocket {
    constructor(url, onMessageCallback) {
        this.url = url;
        this.onMessageCallback = onMessageCallback;
        this.connect();
    }

    connect() {
        this.ws = new WebSocket(this.url);
        
        this.ws.onopen = () => console.log("Connected to Java Backend");
        
        this.ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            this.onMessageCallback(data);
        };
        
        this.ws.onclose = () => {
            console.log("Disconnected. Reconnecting in 3s...");
            setTimeout(() => this.connect(), 3000);
        };
    }
}
