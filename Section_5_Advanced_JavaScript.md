# Advanced JavaScript: Objects and Functions

* Everything is an Object: Inheritance and the Prototype Chain
  
  * Primitives:(Numbers, Strings, Booleans, Undefined, Null)
  * Objects: (Arrays, Functions, Objects, Dates, Wrappers for Numbers, Strings, Booleans)
  * Inheritance is when one object is based on another object
  * Javascript is a protype based-language. Each object has a prototype property.
  * Each object is part of a bigger Object that has its own methods.
  
  * Protype Chain: When a certain method (or property) is called, 
  the search starts in the object itself, and if it cannot be found, the search moves on to
  the object's prototype. This continues until the method is found: **prototype chain**.
  
* Creating Objects: Function Constructors
  ```javascript
  //a John Object literal
  var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
  };
  //Function Constructor
  var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  //Using the constructor to create a john object
  var john = new Person('John', 1990, 'teacher'); //Instantiation

  //when the new operator is used, a brand new empty object is created {}
  //Then a function is called, which creates a new execution context with a this variable
  //Therefore the new operator makes 'this' point to the new empty object so it won't point 
  //to the global object.
  
  //Using the prototype property to add methods and properties to the Person constructor
  Person.prototype.calculateAge = function(){
      console.log(2016 - this.yearOfBirth);
  }

  //When a new object is called that inherits from the Person constructor, 
  //it will be able to use the methods and properties placed on the constructor.
  
  //Using the calculateAge function.
  var jane = new Person('Jane', 1969, 'designer');
  jane.calculateAge();
  //46

  Person.prototype.lastName = 'Smith';
  console.log(jane.lastName);
  //Smith
  ```
  
* The Prototype Chain in the Console

  The prototype chain is easily visible in the browser's console. 

* Creating Objects: Object.create

  Object.create is another way to create objects. The Object.create method allows you to create an object that is based on a prototype     that is created. 
  
  ```
  var personProto = {
    calculateAge : function(){
        console.log(2016 - this.yearOfBirth)
    }
  }

  var john = Object.create(personProto)

  john
  {}
  __proto__:
  calculateAge: ƒ ()
  __proto__: Object;
 

* Primitives vs. Objects
  
  Variables assocaited with primitives holds the value of the primitive.
  Variables associated with objects do not hold the value of that object. 
  They instead hold a place in memory that references the object.
  
* First Class Functions: Passing Functions as Arguments

  A function is an instance of the Object type. It behaves like any other object. We can store functions in a variable.
  We can pass a function as an argument. We can return a function from a function. 
  Therefore, we have **first-class functions**.
  
* First Class Functions: Function Returning Functions

```
  function interviewQuestion(job){
    //return different function for each job
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?' );
        }
    } else {
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
  }
  var teacherQuestion = interviewQuestion('teacher');
  var designerQuestion = interviewQuestion('designer');
  teacherQuestion('Jane');
  designerQuestion('John');
```

* Immediately Invoked Function Expressions(IIFE)

```
  (function(){
    var score = Math.random() * 10;
    console.log(score >=5);
  })();
  
  //The parenthesis outside the function that is wrapped in 
  parenthesis immediately invokes the anonymous function.
```

* Closures

```javascript
  function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
  }

  var retirementUS = retirement(66)
  retirementUS(1980);

  //In the function above, retirement(66) calls the first outter function.
  //The outter function creates a new execution stack that creates the a variable.
  //The inner function was returned, popping the outter function and its variables off the stack.
  //But, function(yearOfBirth) was immediately called.
  //function(yearOfBirth) uses its own created variables AND the a variable from the first outter function,
  //even though it was popped off the stack.
  //This is what a closure is. The outter function closes its variables in so that inner functions still have
  //access to them, even though the outter function was popped off the stack.
```
  **Closure** An inner function always has access to the variables and parameters of its outer function, even after
    the outer function has returned.
    
* Bind, Call and Apply

  First argument of call if to set the this variable.
  
  john.presentation.call(emily, 'friendly', 'afternoon') 
  //'Call' allows emily object to use john's method.
  john.presentation.apply(emily, ['friendly', 'afternoon'] 
  //'Apply' allows emily object os use jon's method but arguments have to be sent via an array.
  john.presentation.bind(john, 'friendly');
  //Allows you to bind (present) one of the arguments to a given function
  
  


