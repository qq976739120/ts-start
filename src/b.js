"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var a_1 = require("./a");
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(name, age) {
        return _super.call(this, name, age) || this;
    }
    B.prototype.print_age = function () {
        console.log(this.age);
    };
    return B;
}(a_1["default"]));
exports["default"] = B;