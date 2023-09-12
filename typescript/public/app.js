"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = "moiz";
// console.log(a);
let array = [1, 2, 3, 4, 5];
array.push(5);
let user = {
    name: "moiz",
    class: 10,
    getName() {
        return this.name;
    }
};
// console.log(user.getName());
function Calc(a, b) {
    let data = b ? a + b : a;
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
let whichDay = Days.Thurs;
function whichDayFunc(data) {
    return data;
}
// console.log(whichDayFunc(Days.Tues))
let data = "moiz";
let random;
random = "ali";
random = 1;
console.log(data);
let response = 1;
