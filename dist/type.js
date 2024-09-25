"use strict";
// function add(n1: number, n2: number, fuck: boolean) {
//   return n1 + n2;
// }
// const n1 = 2;
// const n2 = 2;
// const n3 = true;
// console.log(add(n1, n2, n3));
const user = {
    name: "string",
    age: 12,
    email: "string"
};
function test(user) {
    console.log(user.name);
}
test(user);
const teamLead = {
    name: "string",
    startDate: new Date(),
    department: "string"
};
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Left"] = 1] = "Left";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function doSomething(key) {
    console.log(key + "from ");
}
doSomething(Direction.Down);
doSomething(Direction.Up);
