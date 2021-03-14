"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Random = /** @class */ (function () {
    function Random(min, max, n) {
        var _this = this;
        this.outputRandom = function () {
            var arrRandom = [];
            for (var i = 0; i < _this.n; i++) {
                var random = Math.floor(Math.random() * (_this.max - _this.min + 1)) + _this.min;
                arrRandom.push(random);
            }
            return arrRandom;
        };
        this.min = min;
        this.max = max;
        this.n = n;
    }
    return Random;
}());
var Filter = /** @class */ (function (_super) {
    __extends(Filter, _super);
    function Filter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filterArrRandom = function () {
            var arrRandom = _this.outputRandom();
            var newArr = [];
            arrRandom.forEach(function (item) {
                item < 0 ? newArr.push(item + "?") : newArr.push("" + item);
            });
            return newArr;
        };
        return _this;
    }
    return Filter;
}(Random));
var filter = new Filter(-25, 25, 10);
console.log(filter.filterArrRandom());
