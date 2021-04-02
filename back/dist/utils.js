"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randint = exports.sleep = void 0;
function sleep(ms) {
    //sleep
    return new Promise((resolve) => setTimeout(resolve, ms));
}
exports.sleep = sleep;
function randint(max) {
    return Math.floor(Math.random() * max);
}
exports.randint = randint;
//# sourceMappingURL=utils.js.map