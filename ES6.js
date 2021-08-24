// let, const, var 

var age = 20;

if(age > 18){
    const  name1 = "salman shah";
    let name2 = "manna";
    var name3 = "bangla bhai";

    // console.log(name1);
    // console.log(name2);
    // console.log(name3);
}
console.log(name1);
console.log(name2);
console.log(name3);

function mostan(){
    const  name1 = "salman shah";
    let name2 = "manna";
    var name3 = "bangla bhai";
}

// console.log(name1);
// console.log(name2);
mostan()
console.log(name3);

/*

const , let হচ্ছে  ব্লক স্কোপের বাহিরে কাজ করে না। function scope এর বাহিরে কাজ করে না। 
var ব্লক  স্কোপের বাহিরে কাজ করে।  var function scope এর বাহিরে কাজ করে না। 

ReferenceError: name1 is not defined 
ReferenceError: যখন কোন ভ্যারিয়েবলকে তৈরি না করে এক্সেস করা হয় 
TypeError: Assignment to constant variable.

const দিয়ে ভ্যারিয়েবল  তৈরি করলে সেই ভ্যারিয়েবলে এক বারিই ভ্যালু এসাইন করতে পারি। একবারের বেশি দুইবার ভ্যালু এসাইন করলে type error দেখাবে 
let দিয়ে দিয়ে ভ্যারিয়েবল  তৈরি করলে বারবার ভ্যালু এসাইন করা যায়। 


*/

console.log(name)

const number1 = 30; 

number1 = 40;

console.log(number1);



/* Default Parameter*/ 

function mostan(name1, name2="bhai"){
    const fullName = `${name1} ${name2}`

    return fullName; 
}

console.log(mostan("bangla", "samsu"))


function multi(firstPara = 1, SecondPara = 1){

    const result = firstPara * SecondPara;

    return result;
}

console.log(multi(5))

/* Template string*/

const firstName = "Ershad"
const lastName = "faluda"
let value = 2;

// const fullName = firstName +" "+ lastName + " Amar bhai";

const fullName = `${firstName} ${lastName} ${value + 4}`
console.log(fullName);

/* 
মাল্টি লাইন ব্যবহার , ডায়নামিক ভাবে ভ্যালু এসাইন, ম্যাথমেটিক অপারেশন করা যায় 

*/


/* Arrow Function*/ 

function mostan(name1, name2){
    const fullName = `${name1} ${name2}`

    return fullName; 
}

const mostan = function (name1, name2){
    const fullName = `${name1} ${name2}`

    return fullName; 

}

const mostan = (name1, name2) => {
    const fullName = `${name1} ${name2}`

    return fullName;
}

console.log(mostan("bangla", "bhai"))



function add(number1){
    const result = number1 + number2;

    return result; 
}

const res = add(10, 20);
console.log(res);

const res = (number1, number2) => {
   const  result = number1 + number2
   const res = result - 2;
   return res;

    
};

const res = (number1, number2) => number1 + number2;



console.log(res(10, 20))

const name = name2 => {
    console.log("Hello ")
}

/* Spread operator */ 


const mostan = ["josef", "bangla bhai", "Ershad Sikdar", "sweden aslam"] //mostan  memory ref = 00xadbcaer thikana  kasempur karagar 

const mostan2 = mostan // refernce 

let mostan2 = [...mostan]// mostan2 value  gazipur 
console.log(mostan2)

/* Object destructuring*/ 

const person = {name: "komola", id:"10", age: "20"};

const person = {
    name1: "komola",
    id1: "10",
    age: "20",
    friends: {
        name: "beguni",
        id:"29"
    }
}

const {name, id} =person.friends 
const {name1, id1} = person

console.log(name)
console.log(id)
console.log(name1)
console.log(id1)
// console.log(age)

//Array destructuring

const number = [1, 2, 4, 5]

const [number1, number2, number3] = number; 
console.log(number1);
console.log(number2);
console.log(number3);


const person = [
    {name: "pagala baba", id: "10"},
    {name: "mati baba", id:"50"},
    {name: "balu baba", id:"20"}, 
    {name: "tala baba", id:"20"},
]

// array --> object --> property 


for(let i = 0; i < person.length; i++){
    const obj = person[i];
    const name = obj.name;

    console.log(name)
}
const person = [
    {name: "pagala baba", id: "10"},
    {name: "mati baba", id:"50"},
    {name: "balu baba", id:"20"}, 
    {name: "tala baba", id:"20"},
]

const [person1, person2, person3] = person; 

console.log(person1.age)
// console.log(person2.name)
// console.log(person3.name)

const person = {
    name1: "komola",
    id1: "10",
    age: "20",
    friends: {
        name: "beguni",
        id:"29"
    }
}

console.log(person.friends?.age)

if(person.friends.age > 0) {
    console.log("hello")
}

const persons = [
    {name: "pagala baba", id: 10},
    {name: "mati baba", id:50},
    {name: "balu baba", id:20}, 
    {name: "tala baba", id:40},
]

const person  = persons.map(x => {
    return x.id * 2
})

console.log(person)

//আমাকে একটা এরে  দেওয়া আছে এরের  মধ্যে অনেকগুলো সংখ্যা আছে সেই সংখ্যার মধ্যে 10 এর থেকে বড় সংখ্যা গুলো আমাকে বের করে এনে আরেকটা এরের  মধ্যে রাখতে হবে 

const numbers = [1, 2 ,3, 5, 10 , 30, 34, 50]

// const largest = numbers.filter(number => number > 10)
const largest  =  numbers.find(number => number > 10)
console.log(largest)

const largestValue = [];

const filter = number => {
    if(number > 10) {
        largestValue.push(number);
        return true;
    }
}

for(let i = 0; i < numbers.length; i++){

     filter(numbers[i]);

}

console.log(largestValue)

const numbers = [1, 2 ,3, 5, 10 , 30, 34, 50]

const find = number => {
    if(number > 10) {
        return number;
    }
}



for(let i = 0; i < numbers.length; i++){

     let number  = find(numbers[i]);
    if(number){
        console.log(number)
        break;
    }

}







/*

 ১) এরেকে লুপ করে একটা একটা করে এলিমেন্টকে ধরবে 
 ২) এরপর একটা ফাংশনকে কল করে সেই ফাংশনে এলিমেন্টগুলকে পাঠাবে। 
৩) এই ফাংশন একটা নির্দিষ্ট কাজ করে যা রিটার্ন করবে তা একটা এরেতে রাখবে 
৪) সেই এরেকে রিটার্ব জিরভে 

*/

/*
filter হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে . যতগুলো পাবে ততখুলো দিবে । না পাইলে খালি এরে দিবে 
find হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে, শুধু মাত্র প্রথম জনকে দিবে। না পাইলে আন্ডিফাইন দিবে 
*/

