import { Server } from './server/Server';

class Launcher {
  name: string;
  server: Server;

  constructor() {
    this.server = new Server();
  }

  launchApp() {
    console.log('Started app');
    this.server.createServer();
  }
}

new Launcher().launchApp();
