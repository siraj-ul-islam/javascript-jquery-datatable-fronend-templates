// // // Iterators

// // function myIterable() {
// //   let counter = 0;
// //   return {
// //     next: function () {
// //       if (counter < 5) {
// //         counter++;
// //         return { done: false, value: counter };
// //       } else {
// //         return { done: true, value: undefined };
// //       }
// //     },
// //   };
// // }

// // const myIter = myIterable();
// // console.log(myIter.next().value);
// // console.log(myIter.next().value);
// // console.log(myIter.next().value);
// // console.log(myIter.next().value);
// // console.log(myIter.next().value);
// // console.log(myIter.next().value);

// // function fruitsIterator(values) {
// //   let nextIndex = 0;
// //   // we will return an object
// //   return {
// //     next: function () {
// //       if (nextIndex < values.length) {
// //         // We will return below object
// //         return {
// //           value: values[nextIndex++],
// //           done: false,
// //         };
// //       } else {
// //         // We will return below object with only done
// //         return {
// //           done: true,
// //         };
// //       }
// //     },
// //   };
// // }

// // const myArray = ["Apples", "Grapes", "Oranges", "Bhindi"];
// // console.log("My array is ", myArray);

// // // Using the iterator
// // const fruits = fruitsIterator(myArray);
// // console.log(fruits.next().value);
// // console.log(fruits.next().value);
// // console.log(fruits.next().value);
// // console.log(fruits.next().value);
// // console.log(fruits.next().value);


// //...............................
// /// Generators 
// // .............................................

// function* numbersGen(){
//   let i = 0;

//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 'Hello World'
//   while(true){
//       yield i++;
//       // yield (i++).toString();
//   }
// }

// // let iterator = myGenerator();
// // let result;
// // do { 
// // result = iterator.next();
// // console.log(result);
// // } while (!result.done);

// const gen = numbersGen();
// console.log(gen.next());
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);



//................................
//...................

// console.log("for-in and for-of loops");

// let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];


// **********For in loop*******

// Traditional for loop:
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);   
// }


// // 1. ITERATING AN OBJECT
// let obj = {
//     name: "Harry",
//     language: "JavaScript",
//     hobbies: "Android app development"
// }
// // console.log(obj);
// // 1.1 Iterating an object using Traditional for loop:
// // for (let index = 0; index < Object.keys(obj).length; index++) {
// //     const element = obj[Object.keys(obj)[index]];
// //     console.log(element);   
// // }

// // 1.2 Iterating an object using for-in loop:
// for (let key in obj){
//     console.log(obj[key]);
// }

// // 2. ITERATING A STRING
// // We can use for in with strings to loop through all the characters
// myString = "This is my string";
// for (let char in myString){
//     console.log(myString[char]);
// }

// // Quiz: Use traditional for loop to iterate through the same string


// // **********For of loop***********
// console.log("*****************For of loop starts here**************")
// people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

// for(let name of people){
//     console.log(name);
// }

// for(let name of myString){
//     console.log(name);
// }


// for (let index = 0; index < Object.keys(str).length; index++) {
//   const element = str[Object.keys(str)[index]];

//   console.log(element);
  
// }



//........................
// JavaScript Maps
// .........................


// let map = new Map();
// let str1 = 'key1', str2 ={}, str3 = function () {}

// //setting map value
// map.set(str1, 'This is str1')
// map.set(str2, 'This is str2')
// map.set(str3, 'This is str3')
// console.log(map);

// getting map value
// let value = map.get(str1)
// console.log(value);

// get the map size
// console.log(map.size);

// get key and values
// for (const [key, value] of map) {
//   console.log(key, value);
// }


// get keys
// for (const key of map.keys()) {
//   console.log(key);
// }

// get values
// for (const value of map.values()) {
//   console.log(value);
// }

// map data through for each loop
// map.forEach((value, key) => {
//   console.log(value, key);
// });


// //convert map to array
// let array = Array.from(map)
// console.log(array);

// let arraykey = Array.from(map.keys())
// console.log(arraykey);

// let arrayvalue = Array.from(map.values())
// console.log(arrayvalue);


// ......................
// JavaScript Sets
// ...............................




//SET store unique values and remove the repetation


// let set = new Set();
// let john = { name: "John" };
// let harry = { name: "harry" };
// let cavin = { name: "cavin" };
// //  some users come multiple times
// set.add(john);
// set.add(harry);
// set.add(cavin);
// set.add(john);
// set.add(harry);
// // set keeps only unique values
// for (let user of set) {
// console.log(user.name)}
// console.log(set.keys());
// console.log(set.values());



// const myset = new Set()
// console.log(myset);

// myset.add('This')
// myset.add('Alam')
// myset.add('This')
// myset.add(123)

// console.log(myset);

// // let newset = new Set([2,4,56,7,'this', {a:23,b:78}, 'this'])
// // console.log(newset);

// // console.log(newset.size);

// // console.log(myset.has(123)); // return boolan value

// // myset.delete(123)
// // console.log(myset);


// // iterating a set
// for (const iterator of myset) {
//     console.log(iterator);
// }

// myset.forEach(element => {
//     console.log(element);
// });


// // Converting set to an array
// let mySetArray = Array.from(myset);
// mySetArray.push("them");
// // Duplicating the element
// console.log(mySetArray);
// // Converting to Set
// let arrayToSet = new Set(mySetArray);
// console.log(arrayToSet);
// // Duplicate values are wiped out.


// ..................
// JavaScript Symbols
// ...................

// For uniquness

// const sim1 = Symbol('identifier sim1')
// const sim2 = Symbol('identifier sim2')
// console.log(sim1 === sim2);
// let obj ={}
// obj[sim1] = 'Siraj'
// obj[sim2] = 'aslam'
// obj['name'] = 'ali'
// obj[3] = 'asdf'
// console.log(obj);

// // simbules are igonre in for in loop
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element);
//     }
// }

// console.log(JSON.stringify(obj));


// .............
// javaScript Destructuring
// ...............


// let a,b, c ;
// [a,b] = [12,34]
// console.log(a,b);

// // [a,d,c,d, ...e] = [2,4,5,676,7,8,4,3,233,435,6,66,3,3,2]
// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(d);
// // console.log(e);

// ({a,b, ...c} = {a:33, b: 22, c:12, d:34, e:78})
// console.log(a,b,c);

// object destructing
// let des ={
//     name: 'ali',
//     model : 2029,
//     state : function () { console.log('object');}
// }

// const {name, model, state } = des;
// // console.log(name, model);

// state()