"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globalClasses_1_4_1_1 = require("../globalClasses-1.4.1/globalClasses-1_4_1");
var ArrQuestionMark = /** @class */ (function () {
    function ArrQuestionMark() {
        this.filterArrRandom = function (min, max, n) {
            var randomNumber = new globalClasses_1_4_1_1.RandomNumber;
            var arrRandom = randomNumber.outputRandom(min, max, n);
            var newArr = [];
            arrRandom.forEach(function (item) {
                item < 0 ? newArr.push(item + "?") : newArr.push("" + item);
            });
            return newArr;
        };
    }
    return ArrQuestionMark;
}());
var ArrGrilleMark = /** @class */ (function () {
    function ArrGrilleMark() {
        this.filterArrRandom = function (min, max, n) {
            var randomNumber = new globalClasses_1_4_1_1.RandomNumber;
            var arrRandom = randomNumber.outputRandom(min, max, n);
            var newArr = [];
            arrRandom.forEach(function (item) {
                item % 3 === 0 ? newArr.push(item + "#") : newArr.push("" + item);
            });
            return newArr;
        };
    }
    return ArrGrilleMark;
}());
var newQuestionMark = new ArrQuestionMark();
var newGrilleMark = new ArrGrilleMark();
console.log(newQuestionMark.filterArrRandom(-25, 25, 10));
console.log(newGrilleMark.filterArrRandom(5, 50, 8));
