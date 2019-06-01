import events from 'events';
export default class FarolExtension {
  register(
    farolExtensionConfig: any,
    trigger: string,
    handler: (...args: any[]) => void
  ) {
    const eventEmitter = new events.EventEmitter();
    eventEmitter.on(`${farolExtensionConfig.id}_${trigger}`, handler);
  }
}
