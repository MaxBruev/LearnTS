"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomNumbers_1 = require("../baseClass/randomNumbers");
/**
 * Функция возвращается экземпляр класса RandomNumber
 */
function EX_RandomNumber() {
    return new randomNumbers_1.RandomNumber();
}
function ArrayRandomNumbers(min, max, n) {
    return EX_RandomNumber().outputRandom(min, max, n);
}
/**
 * В этом файле присутствуют классы, которые получают массивы с рандомными
 * данными и обрабатывают их
 */
var ArrQuestionMark = /** @class */ (function () {
    function ArrQuestionMark() {
    }
    ArrQuestionMark.prototype.filterArrRandom = function (ArrRandom) {
        var newArr = [];
        ArrRandom.forEach(function (item) {
            item < 0 ? newArr.push(item + "?") : newArr.push("" + item);
        });
        return newArr;
    };
    return ArrQuestionMark;
}());
var ArrGrilleMark = /** @class */ (function () {
    function ArrGrilleMark() {
    }
    ArrGrilleMark.prototype.filterArrRandom = function (ArrRandom) {
        var newArr = [];
        ArrRandom.forEach(function (item) {
            item % 3 === 0 && item !== 0 ? newArr.push(item + "#") : newArr.push("" + item);
        });
        return newArr;
    };
    return ArrGrilleMark;
}());
var PositiveCounter = /** @class */ (function () {
    function PositiveCounter() {
    }
    PositiveCounter.prototype.counter = function (ArrRandom) {
        var quantityPositive = 0;
        ArrRandom.forEach(function (item) {
            item > 0 ? quantityPositive++ : quantityPositive;
        });
        return quantityPositive;
    };
    return PositiveCounter;
}());
var BigSumNumeral = /** @class */ (function () {
    function BigSumNumeral() {
    }
    BigSumNumeral.prototype.bigSum = function (ArrRandom) {
        var sumNumeral = [];
        ArrRandom.forEach(function (item) {
            var currentSum = 0;
            var currentNumeral = String(item);
            for (var i = 0; i < currentNumeral.length; i++) {
                currentSum += Number(currentNumeral[i]);
            }
            sumNumeral.push(currentSum);
        });
        var bigSumNumeral = Math.max.apply(Math, sumNumeral);
        return bigSumNumeral;
    };
    return BigSumNumeral;
}());
var newQuestionMark = new ArrQuestionMark();
var newGrilleMark = new ArrGrilleMark();
var newPositiveCounter = new PositiveCounter();
var newBigSumNumeral = new BigSumNumeral();
console.log(newQuestionMark.filterArrRandom(ArrayRandomNumbers(-25, 25, 10)));
console.log(newGrilleMark.filterArrRandom(ArrayRandomNumbers(-25, 25, 10)));
console.log(newPositiveCounter.counter(ArrayRandomNumbers(-25, 25, 10)));
console.log(newBigSumNumeral.bigSum(ArrayRandomNumbers(-25, 25, 10)));
