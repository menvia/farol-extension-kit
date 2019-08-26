import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter();
class FarolExtension {
  constructor(public config: any) {}
  register(trigger: string, handler: (...args: any[]) => void) {
    eventEmitter.on(`${this.config.id}_${trigger}`, handler);

    // Add to the global open extension functions
    if (!global.openExtension[this.config.id]) {
      global.openExtension[this.config.id] = {};
    }
    global.openExtension[this.config.id][trigger] = handler;
  }
}
export { eventEmitter, FarolExtension };
