// Default to your backend's port and websocket endpoint
const WS_URL = process.env.REACT_APP_WS_URL || 'ws://localhost:8080/topology';

class WsClient {
  constructor() {
    this.socket = null;
    this.listeners = [];
  }

  connect() {
    this.socket = new WebSocket(WS_URL);

    this.socket.onopen = () => {
      console.log('WebSocket connected to backend');
    };

    this.socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        this.listeners.forEach(listener => listener(data));
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket connection error:', error);
    };

    this.socket.onclose = () => {
      console.log('WebSocket closed. Reconnecting in 3 seconds...');
      setTimeout(() => this.connect(), 3000);
    };
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  send(message) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else {
      console.warn('Cannot send message, WebSocket is disconnected');
    }
  }
}

const wsClient = new WsClient();
export default wsClient;
