class OpenExtension {
  constructor(public config: any) {}
  register(trigger: string, handler: (...args: any[]) => void) {
    // Add to the global open extension functions
    if (!global.openExtension[this.config.id]) {
      global.openExtension[this.config.id] = {};
    }
    global.openExtension[this.config.id][trigger] = handler;
  }
}
export { OpenExtension };
