import * as events from 'events';
const FarolEventEmitter = new events.EventEmitter();
class FarolExtension {
  farolExtensionConfig: any;
  constructor(farolExtensionConfig: any) {
    this.farolExtensionConfig = farolExtensionConfig;
  }
  register(trigger: string, handler: (...args: any[]) => void) {
    FarolEventEmitter.on(`${this.farolExtensionConfig.id}_${trigger}`, handler);
  }
}
export { FarolEventEmitter, FarolExtension };
