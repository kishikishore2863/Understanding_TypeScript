const person:{
    name:string;
    age:number;
}={
    name:'kishore',
    age:30
};

console.log(person.name);



// Array in typeScript


const department:string[]= ["hello","kishi","welcome to types"]
const arr : any[] = ["hello",2,"ckdc"]

for(const dep of department){
    console.log(dep)
}

for(const dep of department){
    console.log(dep.toUpperCase());
}

//Tuple

const person1:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number,string];
}={
    name:"kishore",
    age:20,
    hobbies:["hello"],
    role:[1,"hello"]
}

person1.role.push("ksihi");
console.log(person1.role);

//enum

enum Role{ADMIN, READ_ONLY, AUTHOR};

console.log(Role.ADMIN);
console.log(Role.READ_ONLY)


enum User{ADMIN=1 ,USER=0};
console.log(User.ADMIN);







