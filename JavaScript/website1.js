// let a = document;
// a = document.all;
// a = document.body;
// a = document.forms;
// a = document.links[0].href
// a = document.images
// a = document.scripts
// console.log(a)

// Array.from(a).forEach(function(element) {
//     console.log(element)

// });

// a = document.links
// Array.from(a).forEach(function(Element) {
//     if (Element.href.includes("h")) {
//         console.log(Element.href)
//     }
// });

// let e = document.getElementById('myfirst')
// e = e.childNodes
// e = e.className
// e = e.parentNode
// e.style.color = 'red'
// e.innerText = ' Hello'
// e.innerHTML = '<b> hello guy <b>'
// console.log(e)

// let sel = document.querySelector('#myfirst')
// sel = document.querySelector('.child')
// sel = document.querySelector('h1')
// console.log(sel)

// let sec = document.getElementsByClassName('child')
// sec = document.getElementsByTagName('h1')
// console.log(sec[3])

// Array.from(sec).forEach(element => {
//     console.log(element)
// });

// let node = document.querySelector('.container')
// let cnode = node.childNodes
// let chnode = node.children
// let tcnode = node.childNodes[4].nodeType

// console.log(node)
// console.log(cnode)
// console.log(chnode)
// console.log(tcnode)
// console.log(node.children[1].children[0].children[0].children)
// console.log(node.firstChild)
// console.log(node.firstElementChild)
// console.log(node.childElementCount)
// console.log(node.firstElementChild.nextSibling)
// console.log(node.firstElementChild.nextElementSibling.nextElementSibling)

// let e = document.createElement('li')
// let text = document.createTextNode('I Love You Bro!')
// e.appendChild(text)
// e.className = 'childul'
// e.id = 'creatid'
// e.setAttribute('title', 'MyTitle')
// e.innerText = 'New Text'

// let ul = document.querySelector('ul.this')
// ul.appendChild(e)
// console.log(ul)
// console.log(e)

// let e1 = document.createElement('h3')
// e1.id = 'e1'
// e1.className = 'e1'
// let t = document.createTextNode('Elememts')
// e1.appendChild(t)
// e.replaceWith(e1)

// let r = document.getElementById('myul')
// r.replaceChild(e, document.getElementById('thisul'))
// console.log(r)
// r.removeChild(document.getElementById('list'))
// let g = e.hasAttribute('id')
// g = e.getAttribute('class')
// e.removeAttribute('id')
// console.log(g)

// let quiz = document.createElement('a')
// let text = document.createTextNode('Code with Siraj')
// quiz.appendChild(text)
// quiz.id = 'quiz'
// quiz.setAttribute('href', 'https://www.codewithharry.com');
// let t = document.querySelector('ul.this')
// t.appendChild(quiz)
// console.log(t.appendChild(quiz))

// // click, mouseover == mouseenter, mousemove, mouseout == mouseleave
// document.getElementById("heading").addEventListener("click",
//     function(e) {
//         let v;
//         v = e.target
//         v = e.target.className
//         v = e.target.classList
//         v = Array.from(e.target.className)
//         v = e.offsetX
//         v = e.offsetY
//         v = e.clientY
//         console.log(v)
//         console.log("Headin clicked");
//         // location.href = '//facebook.com'
//     });

// let btn = document.getElementById('btn');
// btn.addEventListener('click', ClickEvent);
// btn.addEventListener('dblclick', dblClickEvent);
// btn.addEventListener('mousedown', mousedownClickEvent);
// btn.addEventListener('mouseenter', mouseEnterClickEvent);
// btn.addEventListener('mousedown', mousedownClickEvent);

// function mouseEnterClickEvent(e) {
//     console.log('Thanks mouseEnterClickEvent', e)
//     e.preventDefault()
// }
// function mousedownClickEvent(e) {
//     console.log('Thanks mousedownClickEvent', e)
//     e.preventDefault()
// }

// function ClickEvent(e) {
//     console.log('Thanks Click', e)
//     e.preventDefault()
// }

// function dblClickEvent(e) {
//     console.log('Thanks dbClick', e)
//     e.preventDefault()
// }

// document.querySelector(".container").addEventListener("mousemove",
//     function(e) {
//         // console.log(e.offsetX, e.offsetY)
//         document.body.style.background = `rgb(
//             ${e.offsetX}, ${e.offsetX}, 140
//             )`

//         // console.log('Mouse Move')
//     });

// localStorage.setItem('name', 'siraj')
// localStorage.setItem('name1', 'Ali')
// console.log(localStorage.getItem('name'))

// localStorage.removeItem('name')
// localStorage.clear()

// let listArray = ['ali', 'kahn', 'aslam']
// listArray.push('kajajjnaj')
// localStorage.setItem('names', JSON.stringify(listArray))
// name = JSON.parse(localStorage.getItem('names'))

// let listArray = ['ali', 'kahn', 'aslam']
// listArray.push('kajajjnaj')
// sessionStorage.setItem('names', JSON.stringify(listArray))
// name = JSON.parse(sessionStorage.getItem('names'))

// // click on Contant and add into local Storage
// let div = document.createElement('div');
// div.innerText = 'This is New Div'

// let heads = document.getElementById('heading')
// heads.appendChild(div)

// div.addEventListener('click', function(e) {
//     div.setAttribute('contenteditable', 'true')

//     div.addEventListener('blur', function(e) {
//         localStorage.setItem('Items1', div.innerText)
//     })

// });

// let btn = document.getElementById('headcont');
// btn.addEventListener('click', ClickEvent);
// function ClickEvent(e) {

//     btn.setAttribute('style', 'border:2px solid red; margin:2px;')
//     btn.setAttribute('contenteditable', 'true')

//     btn.addEventListener('blur', function(e) {
//         localStorage.setItem('Items', btn.innerText)
//     })

// };

// // pow , sqrt, min, max, abs
// let z;
// x= Math.round(3.3)
// y= Math.ceil(3.3)
// z= Math.floor(3.3)
// z  = Math.random()
// z  = 100 * Math.random() // 0---100
// z  = 10 + (100-10) * Math.random() // between 50 -- 100
// z  = Math.ceil( 10 + (100-10) * Math.random()) // between 50 -- 100

// console.log(x,y,z)

// let today = new Date()
// console.log(today)

// let otherday = new Date('8-4-2013 04:54:54')
// // otherday = new Date('8-4-2019')
// // otherday = new Date('8/16/2021')
// let a = otherday.getDay()
// a = otherday.getDate()
// a = otherday.getMinutes()
// a = otherday.getSeconds()
// a = otherday.getHours()
// a = otherday.getTime()
// a = otherday.getMilliseconds()
// a = otherday.getMonth()
// console.log(a)

// otherday.setDate(24)
// otherday.setFullYear(2024)
// otherday.setHours(09)
// otherday.setMinutes(24)
// otherday.setMonth(1)
// otherday.setSeconds(24)
// console.log(otherday)

// // objects literal
// let car ={
//     name: 'CarAlli',
//     model: 2020,
//     run: function(){
//         console.log('Car is Runing')
//     }
// }
// console.log(car)

// // constructor
// function carGenerator(carName, carSpeed) {
//     this.name = carName,
//     this.speed = carSpeed,
//     this.run = function(){
//         console.log(` ${this.name} Crasss is Running`)
//     }
//     this.analyze = function(){
//         console.log(`This ${this.name} car is slower speed ${200 - this.speed} tha Marasdis`)
//     }
// }

// // object Prototype
// carGenerator.prototype.getName = function(){
//     return this.name
// }

// carGenerator.prototype.setName = function(carName){
//     return this.name = carName
// }

// let car1 = new carGenerator('Toyota', 120)
// // car1.setName('Aslam')
// console.log(car1)

// const proto = {
//     slogon: function(){
//         return 'This is a big slogon'
//     },
//     changeName: function(newname){
//         return this.name = newname
//     }
// }

// const obj = Object.create(proto)
// obj.name = "siraj"
// obj.role = 'Programmer'
// obj.changeName('Aslam')
// console.log(obj)

// const obj = Object.create(proto , {
//     name : {value: 'siraj ul islam', writable : true},
//     role : {value: 'Programmer'},
//     model: {value : 2021}

// });
// obj.changeName('aslam')
// console.log(obj)

// const proto = {
//     slogan: function () {
//         return `This company is the best`;
//     },
//     changeName: function (newName) {
//         this.name = newName
//     }
// }

// // This creates harry object
// let harry = Object.create(proto);
// harry.name = "harry";
// harry.role = "Programmer";
// // harry.changeName("Harry2")
// // console.log(harry)

// // This also creates harry object
// const harry1 = Object.create(proto, {
//     name: { value: "harry", writable: true },
//     role: { value: "Programmer" },
// });
// harry1.changeName("Harry2")
// // console.log(harry1)

// // Employee constructor
// function Employee(name, salary, experience) {
//     this.name = name;
//     this.salary = salary;
//     this.experience = experience;
// }

// // Slogan
// Employee.prototype.slogan = function () {
//     return `This company is the best. Regards, ${this.name}`;
// }

// // Create an object from this constructor now
// let harryObj = new Employee("Harry", 345099, 87);
// console.log(harryObj.slogan())

// // Programmer
// function Programmer(name, salary, experience, language) {
//     Employee.call(this, name, salary, experience);
//     this.language = language;
// }

// // Inherit the prototype
// Programmer.prototype = Object.create(Employee.prototype);

// // Manually set the constructor
// Programmer.prototype.constructor = Programmer;

// let rohan = new Programmer("Rohan", 2, 0, "Javascript");
// console.log(rohan);

// function Company(name, salary, experience, language, role) {
//     Programmer.call(this, name, salary, experience, language)
//     this.role = role

// }
// Company.prototype = Object.create(Programmer.prototype)
// Company.prototype.constructor = Company

// let CompanyValue = new Company('ali',22222,44,'java','developer')
// console.log(CompanyValue)

// ES6 Classes and Inheritance

// class Employee {
//   constructor(name, experience, division) {
//     (this.name = name),
//       (this.experience = experience),
//       (this.division = division);
//   }
//   slogon() {
//     return `This is ${this.name}`;
//   }
//   eYear() {
//     return 2022 - this.experience;
//   }
//   static add(a, b) {
//     return a + b;
//   }
// }

// let value = new Employee("siraj", 232, 1);
// console.log(value);
// console.log(Employee.add(23, 3));

// class Programmer extends Employee {
//   constructor(name, experience, division, language, work) {
//     super(name, experience, division);
//     (this.language = language), (this.work = work);
//   }

//   color() {
//       if (this.work == "red") {
//           return ` My color is ${this.work}`;
//       } else {
//         return ` My color None`;
//       }

//   }

//   static mul(x, y) {
//     return x * y;
//   }
// }

// let value2 = new Programmer("aslam", 33, 455, "python", "red");
// console.log(value2);
// console.log(value2.color());
// console.log(Programmer.mul(33, 55));

/** Exercise -4
 * create a class liberary and implement the following:
 * constructor must take the book list as an argument
 * getBookList()
 * issueBook(bookname,user)
 * returnBook(bookname)
 */

console.log("This is tutorial 32 - solution");
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library {
  constructor(bookList) {
    this.bookList = bookList;
    this.issuedBooks = {};
  }

  getBookList() {
    this.bookList.forEach((element) => {
      console.log(element);
    });
  }

  issueBook(bookname, user) {
    if (this.issuedBooks[bookname] == undefined) {
      this.issuedBooks[bookname] = user;
    } else {
      console.log("This book is already issued!");
    }
  }

  returnBook(bookname) {
    delete this.issuedBooks[bookname];
  }
}

let value = new Library(['book1','book2','book3'])
value.issueBook('book1', 'asala')
value.returnBook('book1')
value.getBookList()
console.log(value)

