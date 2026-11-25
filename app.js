let students = ["Ali", "Hassan", "Ahmed", "Usman"];
for (let student of students) {
    console.log(student);
};

let name = "vijdan";
for (let character of name) {
    console.log(character);
};

let numbers = [5, 10, 15, 20, 25];
for (let num of numbers) {
    console.log(num * 2);
};

let student = {
    name: "vijdan",
    age: 27,
    course: "Web Development"
};
for (let key in student) {
    console.log(key);
};

let fruits = ["Apple", "Mango", "Banana"];
for (let index in fruits) {
    console.log(index);
};