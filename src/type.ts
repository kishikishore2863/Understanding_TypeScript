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

// function greet(firstName:String){
//   console.log("hello "+firstName)
// }
// greet("kishi")

// function sum(a:number,b:number):number{
// return a+b
// }

// console.log(sum(3,2))



// function runAfter1s(fn:()=>void){
//   setTimeout(fn,1000);
// }

// runAfter1s(function(){
//   console.log("hi there")
// })



// interface User{
//   firstName:string,
//   lastName:string,
//   age:number,
//   email?:string,
// }

// const user1 :User ={
//   firstName:"string",
//   lastName:"string",
//   age:56
// }


// const fun =(user:User)=>{
//  console.log(user.age)
// }

// fun(user1);










interface Person{
  name:string,
  age:number,
  email:string
}

// class Employee implements Person{
//   name:string;
//   age:number;
//   email:string
 
//   constructor(name:string,age:number,email:string){
//     this.name=name;
//     this.age=age;
//     this.email=email
//   }
//   greet(phrase:string){
//     console.log(` hello ,${phrase} `)
//   }
  

// }

// const e = new Employee("kishore",10000,"jcbjsdjck")
// console.log(e.name)












type User ={
  name:string;
  age:number;
  email:string
}

interface User1{
  name:string;
  age:number;
  email:string
}

const user:User1 ={
  name:"string",
  age:12,
  email:"string"
 
}

function test (user:User){
  console.log(user.name)
}

test(user);












type Employee ={
  name:string;
  startDate:Date;
}

interface Manager {
  name:string;
  department:string
}

type TeamLead = Employee & Manager;

const teamLead:TeamLead = {
name:"string",
startDate:new Date(),
department:"string"
}








type KeyInputs = "up" | "down" | "right" | "left"

enum Direction{
  Up,
  Left,
  Down,
  Right
}

function doSomething(key:Direction){
  console.log(key)
}

doSomething(Direction.Down);
doSomething(Direction.Up)
doSomething(Direction.Right)






type Input=number | string;
function firstEl(arr:Input[]){
  return arr[0]
}
const value =firstEl(["harkirat","sigh"])
console.log()



function identity<T>(arr:T[]):T{
  return arr[0];
}

let output =identity<string>(["mystring","knkkj"]);
let output2 =identity<number>([1,2,3]);
