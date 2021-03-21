"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomClass_1 = require("./randomClass");
var ArrQuestionMark = /** @class */ (function () {
    function ArrQuestionMark() {
    }
    ArrQuestionMark.prototype.filterArrRandom = function (min, max, n) {
        var randomNumber = new randomClass_1.RandomNumber;
        var arrRandom = randomNumber.outputRandom(min, max, n);
        var newArr = [];
        arrRandom.forEach(function (item) {
            item < 0 ? newArr.push(item + "?") : newArr.push("" + item);
        });
        return newArr;
    };
    return ArrQuestionMark;
}());
var ArrGrilleMark = /** @class */ (function () {
    function ArrGrilleMark() {
    }
    ArrGrilleMark.prototype.filterArrRandom = function (min, max, n) {
        var randomNumber = new randomClass_1.RandomNumber;
        var arrRandom = randomNumber.outputRandom(min, max, n);
        var newArr = [];
        arrRandom.forEach(function (item) {
            item % 3 === 0 ? newArr.push(item + "#") : newArr.push("" + item);
        });
        return newArr;
    };
    return ArrGrilleMark;
}());
var PositiveCounter = /** @class */ (function () {
    function PositiveCounter() {
    }
    PositiveCounter.prototype.counter = function (min, max, n) {
        var randomNumber = new randomClass_1.RandomNumber;
        var arrRandom = randomNumber.outputRandom(min, max, n);
        var quantityPositive = 0;
        arrRandom.forEach(function (item) {
            item > 0 ? quantityPositive++ : quantityPositive;
        });
        return {
            arrRandom: arrRandom,
            quantityPositive: quantityPositive
        };
    };
    return PositiveCounter;
}());
var BigSumNumeral = /** @class */ (function () {
    function BigSumNumeral() {
    }
    BigSumNumeral.prototype.bigSum = function (min, max, n) {
        var randomNumber = new randomClass_1.RandomNumber;
        var arrRandom = randomNumber.outputRandom(min, max, n);
        var sumNumeral = [];
        arrRandom.forEach(function (item) {
            var currentSum = 0;
            var currentNumeral = String(item);
            for (var i = 0; i < currentNumeral.length; i++) {
                currentSum += +currentNumeral[i];
            }
            sumNumeral.push(currentSum);
        });
        var bigSumNumeral = Math.max.apply(Math, sumNumeral);
        return { arrRandom: arrRandom, bigSumNumeral: bigSumNumeral };
    };
    return BigSumNumeral;
}());
var newQuestionMark = new ArrQuestionMark();
var newGrilleMark = new ArrGrilleMark();
var newPositiveCounter = new PositiveCounter();
var newBigSumNumeral = new BigSumNumeral();
console.log(newQuestionMark.filterArrRandom(-25, 25, 10));
console.log(newGrilleMark.filterArrRandom(5, 50, 8));
console.log(newPositiveCounter.counter(-5,5,5))
console.log(newBigSumNumeral.bigSum(100, 999, 8));
