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
  ```
  __proto__ is the properties inherited from the object's prototype
  
  //from above
  john
  Person {name: 'John', yearOfBirth: 1990, job: 'teacher}
  __proto__
      calculateAge: function()
      lastName: "Smith"
 ```
 
 * Creating Objects: Object.create
 
