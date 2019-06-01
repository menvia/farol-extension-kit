import events from 'events';
export class FarolExtension {
  farolExtensionConfig: any;
  constructor(farolExtensionConfig: any) {
    this.farolExtensionConfig = farolExtensionConfig;
  }
  register(trigger: string, handler: (...args: any[]) => void) {
    const eventEmitter = new events.EventEmitter();
    eventEmitter.on(`${this.farolExtensionConfig.id}_${trigger}`, handler);
  }
}
