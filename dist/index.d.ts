export declare class FarolExtension {
    farolExtensionConfig: any;
    constructor(farolExtensionConfig: any);
    register(trigger: string, handler: (...args: any[]) => void): void;
}
