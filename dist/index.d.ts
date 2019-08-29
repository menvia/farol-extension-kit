declare class OpenExtension {
    config: any;
    constructor(config: any);
    register(trigger: string, handler: (...args: any[]) => void): void;
}
export { OpenExtension };
