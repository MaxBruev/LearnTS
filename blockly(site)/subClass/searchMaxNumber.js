"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomNumbers_1 = require("../baseClass/randomNumbers");
/**
 * Функция возвращается экземпляр класса RandomNumber
 */
function EX_RandomNumber() {
    return new randomNumbers_1.RandomNumber();
}
/**
 * В данном классе есть метод, который возвращает
 * "Наибольшее число оканчивающееся на 2"
 */
var FilterMaxNumber = /** @class */ (function () {
    function FilterMaxNumber() {
    }
    FilterMaxNumber.prototype.getMaxNumber = function (min, max, n) {
        return searchMaxNumber(min, max, n);
    };
    return FilterMaxNumber;
}());
/**
 * Функция в которой происходит вся магия.
 *
 */
function searchMaxNumber(min, max, n) {
    var ArrayRandom = EX_RandomNumber().outputRandom(min, max, n);
    var newArray = [];
    var result;
    ArrayRandom.forEach(function (item) {
        var newItem = item.toString().slice(-1);
        Number(newItem) === 2 ? newArray.push(item) : null;
    });
    if (newArray.length !== 0) {
        result = "\u041D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0435\u0435 \u0447\u0438\u0441\u043B\u043E \u043E\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u044E\u0449\u0435\u0435\u0441\u044F \u043D\u0430 2: " + Math.max.apply(Math, newArray);
    }
    else {
        result = "\u041D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0435\u0435 \u0447\u0438\u0441\u043B\u043E \u043E\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u044E\u0449\u0435\u0435\u0441\u044F \u043D\u0430 2: \u043D\u0435\u0442";
    }
    return result;
}
var newFilterMaxNumber = new FilterMaxNumber().getMaxNumber(1, 24, 9);
console.log(newFilterMaxNumber);
