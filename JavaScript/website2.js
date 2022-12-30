// console.log("Hello");

// let students = [
//   { name: "alsi", subject: "Java" },
//   { name: "ahamd", subject: "Python" },
// ];

// function enrollStudents(student, callback) {
//   setTimeout(() => {
//     students.push(student);
//     console.log("Student Enrolled");
//     callback();
//   }, 3000);
// }

// function fetchStudents(params) {
//   setTimeout(() => {
//     let str = "";
//     students.forEach((student) => {
//       str += `<li> ${student.name} and ${student.subject} </li>`;
//     });
//     document.getElementById("students").innerHTML = str;
//     console.log("Student Featch called");
//   }, 1000);
// }

// let std = { name: "siraj", subject: "enhglsh" };
// enrollStudents(std, fetchStudents);

// .............................................
// .........................................
// promises
// function inside then is ran as - resolve()
// function inside catch is ran as - reject()

// var promise = new Promise(function (resolve, reject) {
//   const x = "geeksforgeeks";
//   const y = "geeksforgeeks";
//   if (x === y) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// promise
//   .then(function () {
//     console.log("Success, You are a GEEK");
//   })
//   .catch(function () {
//     console.log("Some error has occurred");
//   });


//   // ..........................................
//   // ............................................
// function addNumber(x,y) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       let sum = x + y;
//       let error = false;
//       if (!error) {
//         resolve(sum);
//       } else {
//         reject();
//       }
//     }, 1000);
//   });
// }

// addNumber(2,3)
//   .then(function (add) {
//     console.log('Addded ' + add);
//   })
//   .catch(function () {
//     console.log("Some Problem Occur!!!!");
//   });

//   // ...................................
//   // .....................................
// function fun1() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       let error = true;
//       if (!error) {
//         console.log("Fuction :Your Promise has been Resovled");
//         resolve();
//       } else {
//         console.log("Your Promise has not been Resovled");
//         reject("Sory not Fullfill");
//       }
//     }, 2000);
//   });
// }

// // calling a func1
// fun1()
//   .then(function () {
//     console.log("Thanks");
//   })
//   .catch(function (error) {
//     console.log("Oh No " + error);
//   });

// //.................................................
// // .............................................
// let students = [
//   { name: "alsi", subject: "Java" },
//   { name: "ahamd", subject: "Python" },
// ];

// function enrollStudents(student) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       students.push(student);
//       console.log("Student Enrolled");
//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// }

// function fetchStudents(params) {
//   setTimeout(() => {
//     let str = "";
//     students.forEach((student) => {
//       str += `<li> ${student.name} and ${student.subject} </li>`;
//     });
//     document.getElementById("students").innerHTML = str;
//     console.log("Student Featch called");
//   }, 1000);
// }

// let std = { name: "siraj", subject: "enhglsh" };
// enrollStudents(std)
//   .then(function () {
//     fetchStudents();
//   })
//   .catch(function () {
//     console.log("Some Problem Occur!!!!");
//   });



//....................................................
// Arrow Functions
// .........................................................

// function great() {
//     return 'Great';
// }
// console.log(great()); 

// const name =   function () {
//     return 'Name'
// }
// console.log(name());

// const name1 = () =>{
//     return 'Name1'
// }
// console.log(name1());

// const greety = () => 'Good Morning';
// console.log(greety());

// const morning = name =>  'Good Moring ' + name;
// console.log(morning('Siraj'));

// const morningTwo = (name, work) =>  'Good Moring ' + name +' '+ work;
// console.log(morningTwo('Siraj', 'Engineer'));



//////////////////....................................
//  Fetch api
//.....................................................


// let myBtn = document.getElementById('myBtn')
// let content = document.getElementById('content')


// function getData() {
//     let url = 'data.txt'
//     fetch(url).then((response) => {
//         return response.text();
//     }).then((data) => {
//         console.log(data);
//     })
// }

// function getData() {
//     // let url = 'https://api.github.com/users'
//     let url = 'data.json'

//     fetch(url).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }
// // getData()

// function postData() {
//     let url = 'http://dummy.restapiexample.com/api/v1/create'
//     let data = '{"name":"tes33434t","salary":"123","age":"23"}'
//     let params ={
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     }

//     fetch(url, params).then(response =>  response.json())
//     .then(data => console.log(data))
// }
// // postData()




// let data = {
//     first_name: 'John',
//     last_name: 'Adams',
//     job_title: 'Software Engineer'
//  };
//  const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//  }
//  }
//  fetch('https://api.github.com/users', options)
//     .then(res => res.json())
//     .then(res => console.log(res));



//.........................................
// async and await
// ........................................

// console.log("This is tutorial 43");

// async function H(){
//     console.log('Inside harry function');
//     const response = await fetch('https://api.github.com/users');
//     console.log('before response');
//     const users = await response.json();
//     console.log('users resolved')
//     return users;
// }

// console.log("Before calling harry")
// let a = H();
// console.log("After calling harry")
// console.log(a);
// a.then(data => console.log(data))
// console.log("Last line of this js file")


// ...............................
// try catch finally
// ......................................


// let a =' ali'

// if (a != undefined) {
//     console.log('defined');
//      throw new Error('error Try Agin Letter')
// } else {
//     console.log('un defined');
// }


// try {
//     console.log('Try Block');
//     functionname();
// } catch (error) {
//     console.log('Catch Block');
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
// } finally {
//     console.log('Finally must Run');
// }

