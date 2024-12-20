"use strict";
const person = {
    name: 'kishore',
    age: 30
};
console.log(person.name);
// Array in typeScript
const department = ["hello", "kishi", "welcome to types"];
const arr = ["hello", 2, "ckdc"];
for (const dep of department) {
    console.log(dep);
}
for (const dep of department) {
    console.log(dep.toUpperCase());
}
//Tuple
const person1 = {
    name: "kishore",
    age: 20,
    hobbies: ["hello"],
    role: [1, "hello"]
};
person1.role.push("ksihi");
console.log(person1.role);
//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
console.log(Role.ADMIN);
console.log(Role.READ_ONLY);
var User;
(function (User) {
    User[User["ADMIN"] = 1] = "ADMIN";
    User[User["USER"] = 0] = "USER";
})(User || (User = {}));
;
console.log(User.ADMIN);
