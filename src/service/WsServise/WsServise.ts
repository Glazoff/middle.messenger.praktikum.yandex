import EventBus from '../EventBus';

enum Event {
  Error = 'error',
  Connected = 'connected',
  Close = 'close',
  Message = 'message',
}

export default class WsServise extends EventBus {
  private socket?: WebSocket;

  private pingInterval?: ReturnType<typeof setInterval>;

  private readonly pingIntervalTime = 30000;

  private url: string;

  constructor(url: string) {
    super();
    this.url = url;
  }

  public send(data: string | number | object) {
    if (!this.socket) {
      throw new Error('Socket is not connected');
    }

    this.socket.send(JSON.stringify(data));
  }

  public connect(): Promise<void> {
    if (this.socket) {
      throw new Error('The socket is alrade connected');
    }

    this.socket = new WebSocket(this.url);

    this.subscribe(this.socket);
    this.setupPing();

    return new Promise((resolve, reject) => {
      this.on(Event.Error, reject);
      this.on(Event.Connected, () => {
        this.off(Event.Error, reject);
        resolve();
      });
    });
  }

  public close() {
    this.socket?.close();
    clearInterval(this.pingInterval);
  }

  private setupPing() {
    this.pingInterval = setInterval(() => {
      this.send({ type: 'ping' });
    }, this.pingIntervalTime);

    this.on(Event.Close, () => {
      clearInterval(this.pingInterval);
      this.pingInterval = undefined;
    });
  }

  private subscribe(socket: WebSocket): void {
    socket.addEventListener('open', () => {
      this.emit(Event.Connected);
    });

    socket.addEventListener('close', () => {
      this.emit(Event.Close);
    });

    socket.addEventListener('error', () => {
      this.emit(Event.Error);
    });

    socket.addEventListener('message', (message: MessageEvent<any>) => {
      try {
        const data = JSON.parse(message.data);
        if (['ping', 'user connected'].includes(data?.type)) {
          return;
        }
        this.emit(Event.Message, data);
        console.log('новое сообщение', data);
      } catch (e) {
        console.log(e);
      }
    });
  }
}
