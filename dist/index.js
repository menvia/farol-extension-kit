"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OpenExtension = /** @class */ (function () {
    function OpenExtension(config) {
        this.config = config;
    }
    OpenExtension.prototype.register = function (trigger, handler) {
        // Add to the global open extension functions
        if (!global.openExtension[this.config.id]) {
            global.openExtension[this.config.id] = {};
        }
        global.openExtension[this.config.id][trigger] = handler;
    };
    return OpenExtension;
}());
exports.OpenExtension = OpenExtension;
