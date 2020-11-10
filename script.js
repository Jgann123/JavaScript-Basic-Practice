    //this is a comment

    //variables basically a container of attributes.
    var b = 'smoothie';
    console.log(b);

    var someNumber = 45;
    console.log(someNumber);




    //JavaScript == GUUI development so fast. 

    var age = prompt('What is your age?');



    document.getElementById('someText').innerHTML = age;

    var num1 = 5.7; 
    console.log(num1);

    num1 = num1 * 88;
    console.log(num1);
    //function


    //create
    function result () {

    alert ('this is a function') 

    }
    //call
    result();


    function greeting() {
        var name = prompt('What is your name?');
        var result = "Hello" +'' + name; //string concatination. 
        console.log(result);

    }

    greeting();

    //How to take in arguments? 

    //How do we add two numbers together in a function

    function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
        
    }

    sumNumbers(10,11);

    //while and for loops. :)

    var num = 0;

    while (num < 100) {
    num += 1;
    console.log(num);

    }

    for(let num = 0; num < 100; num++) {
        console.log(num);
    }

    //Data Types

    var yourAge = 31; // this is a number
    var yourName = "Jeremy"; //This is a String
    let name = {first: 'Jeremy', last: 'Gann'};// in Python this would be called a dictionary. // This is an object 
    let truth = false; //boolean
    let groceries = ['apple', 'orange','bananas'];//array
    let value; //undefined
    let nothing = null; //value is null;

    //Strings in javascript {common methods}
    let fruit = 'banana, apple, orange, blackberry';
    let moreFruit = 'apple/banana';  //newline


    console.log(fruit.length);// 6
    console.log(fruit.indexOf('a'));//1
    console.log(fruit.slice(2,6));// returns nana
    console.log(fruit.toUpperCase());// returns banana to all uppercase you can also use toLowerCase()
    console.log(fruit.charAt(2));// returns n remember the reason why is because the count is 0,1,2,3,4,5,6 So, 0 would be B in Banana. 
    console.log(fruit.split(',')); //split by comma


    //Array

    let fruits = ['banana', 'pinapple', 'blueberries', 'Oranges'];
    fruits = new Array('banana', 'pinapple', 'blueberries', 'Oranges');//does the same as the line above.

    console.log(fruits[3]); // accesses the value of index 3

    fruits[0] = 'pear'; //changes the value of the very first index. Now banana is pear
    console.log
    for (let i = 0; i < fruit.length; i++) {
    console.log(fruits[i]);
    }

    //Array common methods.
     console.log('to String', fruits.toString());
     console.log(fruit.join( '$' ));
     console.log(fruits, fruits.pop(), fruits);


   let emptyArray = new Array()
   for(let num = 0; num < 10; num++) {
       emptyArray.push(num);
   }

   console.log(emptyArray);


   //Objects in Javascript. 

   let student = {
   first: "Jeremy", 
   last: "Gann", 
   age: "31"
    // studentInfo: function() {
    //     return this.first + \n
    // }
};

   console.log(student.studentinfo());

   console.log(student.first);
   student.first = "Jeremiah";
   console.log(student.last);

   student.age++; //this would be 32



//conditionals, control flows, and if else. 

//target demographic... 

// calling all men! 
var age = prompt('what is your age?');

if( (age >= 18) && (age <= 35) ) {

    status = 'target demo'
//meaning 18-35 is the target demdographic. 
}
else{
    status = "not my audience!"
}

console.log(status);





















