# How Javascript Works Behind the Scenes

* How our code is executed

 1. Host enviornment (Browser JS Engine/Node) takes our code and execute it.
 2. Code is parsed by a Parser to check for correct syntax
 3. If all is correct, code is converted to machine code
 4. Code is then ran to do its work.
 
* Execution Contexts and the Execution Stack
 1. All javascript code runs in an environment called the execution context
 2. The default execution context is the 'global' (code not inside of a function)
 3. In the case of the browser, global is associated with the window object
 4. Each time a function is called, it gets it's own execution context and then put on top of the current context
 5. Once function is complete with it's code, it is popped off the execution stack
 
* Execution Contexts in Detail: Creation and Execution Phases and Hoisting

1. Execution context is associated with an object
2. EC contains variable object, scope chain, and 'this' variable
3. There is a Creation Phase and an Execution phase:
     1. In the Creation Phase:
        1. Creation of Variable Object
           1. **Argurment Object** is created
           2. Code is scanned for **function declarations** -> pointing to the function
           3. Code is scanned for variable declarations -> **setting variables to undefined**
        2. Creation of scope chain
        3. Determine of 'this' variable
     2. In the Execution Phase:
        1. Code of function generated in the current execution context is ran line by line
        
* Hoisting in Practice

**Notes:** Because of the creation phase, function calls can be used on functions that are declared after the call. However, this does not work the same for function expression because the variable will be set 'hoisted' and set to undefined. Therefore, you'll get a '[variable] is not a function error.

```javascript

//The following does not work. It results in an error because before the function call
//retirement variable is set to 'undefined' in the creation phase. 
//Function expressions are not setup during creation phase.
//Therefore the parser will see an attempted function call on a value of 'undefined'.

retirement(year);
var retirement = function calculateAge(year){
 console.log(65 - (2016 -year));
 }
 
//The following works because function declarations points to a function during the creation phase. 
//Once the execution phase begins, calculateAge will be pointing to a function.

calculateAge(1965);

function calclateAge(year){
 console.log(2016 - year)
 }

console.log(age) //**uncaught reference** error - age is not defined // age hasn't been declared at this point 
var age;

console.log(age) //undefined // age is set to 'undefined' in the creation phase
var age = 23;

console.log(age) // 23 // age assigned the value 23 in above line
```

* Scoping and the Scope Chain

Big Picture: Scoping asnswers the question 'where can we access a certain variable?'

1. Each new function creates a scope
2. Lexical scoping is a fuction within another function
3. Scope chain goes up from locally scoped functions to the global scope, not in the reverse

```javascript
var a = 'Hello!';
first();

function first() {
 var b = 'Hi!';
 second();
 
 function second() {
  var c = 'Hey!';
  console.log(a + b + c);
  }
}
// output: Hello!Hi!Hey!
```
In above code, function second() has access to variables in function second(), function first(), and the global scope

4. Execution Stack is different than Scope Chain
```javascript
var a = 'Hello!';
first();

function first() {
 var b = 'Hi!';
 second();
 
 function second() {
  var c = 'Hey!';
  third()
  }
}

function third( {
  var d = 'John'
  console.log(a + b + c + d);
 }
```
Above output will result in **uncaught reference** b is not defined because third() does not have access to the var b. 
third() only has access to var a (in the global scope) and var d. var b is locally scoped to first(). 

* The 'this' keyword/The 'this' keyword in practice

1. In the creation phase, the 'this' variable is created and given to each execution context.
2. In a **regular function** call, the 'this' variable points at the global object (the window object in the browswer).
```javascript
function calculateAge(year){
    console.log(2016 - year);
    console.log(this);
}
//output:
//31
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
````
3. In a **method call**, the 'this' variable points to the object that is calling the method.
```javascript
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function (){
        console.log(this);
    }
}
john.calculateAge()
//output: {name: "John", yearOfBirth: 1990, calculateAge: ƒ}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function (){
        console.log(this);
        
        function innerFunction(){
         console.log(this);
        }
        innerFunction(); // 'this' points to the global window object
    }
}

//The 'this' keyword in the innerFunction points to the gloabl window object even though
//it's attached to the method. Remember the rule. This points to global when regular function
//calls are made.
```
4. The 'this' keyword isn't assigned a value until a function where it is defined is called.
```javascript
 mike.calculateAge = john.calculateAge;
 mike.calculateAge(); 
 //mike.calculateAge borrows john.calculateAge, calls the method, which attaches 'this' to mike
```

