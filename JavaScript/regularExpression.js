// let reg = /siraj/; // This is a regular expression literal in js
// reg = /siraj/g; // g means global
// // reg = /harry/i; // i means case insensitive

// // console.log(reg);
// // console.log(reg.source);

// let s = "This is great code with siraj and also siraj bhai";
// // Functions to match expressions
// // 1. exec() - This function will return an array for match or null for no match
// let result = reg.exec(s);
// // result = reg.exec(s);
// // console.log(result);
// // result = reg.exec(s);
// // console.log(result); ---> We can use multiple exec with global flag

// // if (result) {
// //     console.log(result);
// //     console.log(result.input);
// //     console.log(result.index);
// // }

// // 2. test() - Returns true or false
// let result2 = reg.test(s);
// // console.log(result2); --> This will only print true if the "reg" is there in the string "s"

// // 3. match() - It will return an array of results or null
// // let result3 = reg.match(s) ---> This is wrong!!
// let result3 = s.match(reg) // ---> This is right
// // console.log(result3);

// // 4. search() - Returns index of first match else -1
// // let result4 = reg.search(s) ---> This is wrong!!
// let result4 = s.search(reg) // ---> This is right
// // console.log(result4);

// // 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

// let result5 = s.replace(reg, 'ALi');
// console.log(result5);

// // splitting strings into array elements
// const test = /[\s,]+/;
// let result0 = s.split(test);
// console.log(result0); // ["I", "am", "learning", "JavaScript", "RegEx"]


//.................................................
// Metacharacters 
//..................................................
// // let regex = /siraj/g
// let regex = /sirhhhhaj/g
// // Lets look into some metacharacter symbols
// regex = /^sir/  // ^ means expression will match if string starts with
// regex = /aj$/    // $ at the end of the string means "string ends with"
// regex = /s.ra/   // //matches any one character
// regex = /s*j/ //matches any 0 or more characters
// regex = /s?i?ajz?/  //? after character means that character is optional
// regex = /si\#a*/ // escape chracter

// let str = "si#raj is good boy and is siraj"

// let result = regex.exec(str)
// console.log("The result from exec is ", result);

// if(regex.test(str)){
//     console.log(`The string ${str} matches the expression ${regex.source}`);
// }
// else{
//     console.log(`The string ${str} does not match the expression ${regex.source}`);
// }





// .............................................
// Character sets |
//. .....................................



// // Character Sets - We use []
// let regex = /siraj/i
// regex = /sir[a-z]j/   // can be any character from a to z
// regex = /sir[iraz]j/  //can be an i, r, a, z
// regex =  /sir[^iraz]j/ // cannot be any an i, r, a, z
// regex =  /s[ir]r[^irz]j/
// regex = /s[a-zA-Z]raj[a-zA-Z0-9]*/  // we can have as many character sets as we want

// // Quantifiers - We use {}
// regex = /sir{2}aj/ // r can occur exactly 2 times
// regex = /sir{0,2}aj/ // r can occur exactly 0 to 2 (0 or 1 or 2) times

// // Groupings  - We use paranthesis for groupings ()
// regex = /(sir){2}aj([1-5]r){4}/

// let str = "siraj sirsiraj1r2r3r5r sirraj is good boy and is sIraj19Ah781"

// let result = regex.exec(str)
// console.log("The result from exec is ", result);

// if(regex.test(str)){
//     console.log(`The string ${str} matches the expression ${regex.source}`);
// }
// else{
//     console.log(`The string ${str} does not match the expression ${regex.source}`);
// }


//...................................................
// // Character classes
// ......................................................
// let regex = /siraj/
// regex = /s\wraj/ //word character - _ or alphabet or numbers
// regex = /\w+d1r/;       // \w+ means one or more word characters
// regex = /\Wbhai/;       // Non word character
// regex = /\W+bhai/;      // \W+ means more than one Non word character
// regex = /number \d999/; // \d means digit
// regex = /number \d+/;   // \d+ means more than one digit
// regex = /\D999/;        // \D means non digit
// regex = /\D+999/;       // \D+ means more than one non digit
// regex = /\ska number/;  // Match whitespace character
// regex = /\s+ka number/; // \s+ means match one or more than one whitespace characters
// regex = /\Ska number/;  // Match non whitespace character
// regex = /\S+ka number/; // Match one or more than one non whitespace character
// regex = /2y4g3g5\b/;  // word boundary


// // Assertions
// regex = /s(?=i)/;
// regex = /s(?!i)/;

// str = " 2y4g3g5 sirajd1r4r5ry%%$@bhai hdrryika number 899999harry9999 ski";

// let result = regex.exec(str);
// console.log("The result from exec is ", result);

// if(regex.test(str)){
//     console.log(`The string ${str} matches the expression ${regex.source}`);
// }
// else{
//     console.log(`The string ${str} does not match the expression ${regex.source}`);
// }





// ...........................................
// form
// ..............................................


let name = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')

let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
        
    }
})


email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
}) 


let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);
    
    // Submit your form here
    if(validEmail && validUser && validPhone){
        // let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }

    
    
})