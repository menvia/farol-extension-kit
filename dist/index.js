"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __importDefault(require("events"));
var FarolExtension = /** @class */ (function () {
    function FarolExtension(farolExtensionConfig) {
        this.farolExtensionConfig = farolExtensionConfig;
    }
    FarolExtension.prototype.register = function (trigger, handler) {
        var eventEmitter = new events_1.default.EventEmitter();
        eventEmitter.on(this.farolExtensionConfig.id + "_" + trigger, handler);
    };
    return FarolExtension;
}());
exports.FarolExtension = FarolExtension;
