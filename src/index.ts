import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter();
class FarolExtension {
  constructor(public config: any) {}
  register(trigger: string, handler: (...args: any[]) => void) {
    eventEmitter.on(`${this.config.id}_${trigger}`, handler);
  }
}
export { eventEmitter, FarolExtension };
