"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var eventEmitter = new events_1.EventEmitter();
exports.eventEmitter = eventEmitter;
var FarolExtension = /** @class */ (function () {
    function FarolExtension(config) {
        this.config = config;
    }
    FarolExtension.prototype.register = function (trigger, handler) {
        eventEmitter.on(this.config.id + "_" + trigger, handler);
    };
    return FarolExtension;
}());
exports.FarolExtension = FarolExtension;
