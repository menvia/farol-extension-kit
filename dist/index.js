"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __importDefault(require("events"));
var FarolExtension = /** @class */ (function () {
    function FarolExtension() {
    }
    FarolExtension.prototype.register = function (farolExtensionConfig, trigger, handler) {
        var eventEmitter = new events_1.default.EventEmitter();
        eventEmitter.on(farolExtensionConfig.id + "_" + trigger, handler);
    };
    return FarolExtension;
}());
exports.default = FarolExtension;
