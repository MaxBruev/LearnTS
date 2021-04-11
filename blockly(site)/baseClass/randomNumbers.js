"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumber = void 0;
/**
 * Класс, который содержит функцию возвращающую
 * массив с рандомными числами в заданном диапазоне
 */
var RandomNumber = /** @class */ (function () {
    function RandomNumber() {
    }
    RandomNumber.prototype.outputRandom = function (min, max, n) {
        return random(min, max, n);
    };
    return RandomNumber;
}());
exports.RandomNumber = RandomNumber;
function random(min, max, n) {
    var arrRandom = [];
    for (var i = 0; i < n; i++) {
        var random_1 = Math.floor(Math.random() * (max - min + 1)) + min;
        arrRandom.push(random_1);
    }
    return arrRandom;
}
