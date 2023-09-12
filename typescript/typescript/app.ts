export { }

let a: String = "moiz";
// console.log(a);

let array: Number[] = [1, 2, 3, 4, 5];
array.push(5)

type User = {
    name: String,
    class: Number,
    id: Number
}

interface UserType {
    name: String,
    class: Number,
    // // getName: () => String
    // getName(): String

}

interface ExtendedUserType extends UserType {
    getName(): String
}


let user: ExtendedUserType = {
    name: "moiz",
    class: 10,
    getName() {
        return this.name;
    }
}

// console.log(user.getName());

function Calc(a: number, b?: number): number {
    let data = b ? a + b : a;
    return data;
}

// console.log(Calc(90));

//Generic function

function generic<T>(data: T): T {
    return data
}

// console.log(generic<string>("ali"))

//Enum

enum Days { Mon = "mon", Tues = "tues", Wed = "Wed", Thurs = "Thurs" }

let whichDay: Days = Days.Thurs

function whichDayFunc(data: Days): Days {
    return data
}

// console.log(whichDayFunc(Days.Tues))

let data: "moiz" = "moiz";

let random;
random = "ali";
random = 1

console.log(data);

type typeAlias = string | number;

let response: typeAlias = 1;



