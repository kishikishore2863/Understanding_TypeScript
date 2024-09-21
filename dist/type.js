"use strict";
// function add(n1: number, n2: number, fuck: boolean) {
//   return n1 + n2;
// }
// const n1 = 2;
// const n2 = 2;
// const n3 = true;
// console.log(add(n1, n2, n3));
// const person: {
//   name: String;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "kishore",
//   age: 20,
//   hobbies: ["sports", "learning"],
//   role: [1, "kishi"],
// };
// console.log(person.role);
// const ADMIN = 0;
// const USER = 1;
// enum Role {
//   ADMIN,
//   Readmy = 100,
//   author,
// }
// const person: {
//   name: String;
//   age: number;
//   hobbies: string[];
//   role: Number;
// } = {
//   name: "kishore",
//   age: 20,
//   hobbies: ["sports", "learning"],
//   role: Role.ADMIN,
// };
// console.log(person.role);
function greet(firstName) {
    console.log("hello " + firstName);
}
greet("kishi");
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 2));
function runAfter1s(fn) {
    setTimeout(fn, 1000);
}
runAfter1s(function () {
    console.log("hi there");
});
