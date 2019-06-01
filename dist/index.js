"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require("events");
var FarolExtension = /** @class */ (function () {
    function FarolExtension(farolExtensionConfig) {
        this.farolExtensionConfig = farolExtensionConfig;
    }
    FarolExtension.prototype.register = function (trigger, handler) {
        var eventEmitter = new events.EventEmitter();
        eventEmitter.on(this.farolExtensionConfig.id + "_" + trigger, handler);
    };
    return FarolExtension;
}());
exports.FarolExtension = FarolExtension;
