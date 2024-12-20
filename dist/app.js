"use strict";
// function combine(input :number | string ,input2:number | string){
//     let result;
//     if(typeof input == 'number' && typeof input2 == 'number'){
//         result = input+input2;
//     }else{
//         result =input.toString() +input2.toString();
//     }
//     return result;
// }
// const coombined = combine("kishi","kishore");
// console.log(coombined);
// function add(n1:number, n2:number):number{
//     return n1 + n2 ; 
// }
// console.log(add(1,2))
// function print(num:number):void{
//     console.log('result:',num);
// }
// print(10);
// let combineValues:Function;
// combineValues =add;
// console.log(combineValues(1,2));
function addAndhandle(n1, n2, cb) {
    let result = 0;
    result = n1 + n2;
    setTimeout(() => cb(result), 10000);
}
function result(num) {
    console.log("result :", num);
}
function hello() {
    console.log("hello");
}
addAndhandle(1, 2, result);
hello();
