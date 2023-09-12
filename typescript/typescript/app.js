"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = "moiz";
// console.log(a);
var array = [1, 2, 3, 4, 5];
array.push(5);
var user = {
    name: "moiz",
    class: 10,
    getName: function () {
        return this.name;
    }
};
// console.log(user.getName());
function Calc(a, b) {
    var data = b ? a + b : a;
    return data;
}
// console.log(Calc(90));
//Generic function
function generic(data) {
    return data;
}
// console.log(generic<string>("ali"))
//Enum
var Days;
(function (Days) {
    Days["Mon"] = "mon";
    Days["Tues"] = "tues";
    Days["Wed"] = "Wed";
    Days["Thurs"] = "Thurs";
})(Days || (Days = {}));
var whichDay = Days.Thurs;
function whichDayFunc(data) {
    return data;
}
// console.log(whichDayFunc(Days.Tues))
var data = "moiz";
var random;
random = "ali";
random = 1;
console.log(data);
var response = 1;
