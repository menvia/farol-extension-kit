/// <reference types="node" />
import { EventEmitter } from 'events';
declare const eventEmitter: EventEmitter;
declare class FarolExtension {
    config: any;
    constructor(config: any);
    register(trigger: string, handler: (...args: any[]) => void): void;
}
export { eventEmitter, FarolExtension };
