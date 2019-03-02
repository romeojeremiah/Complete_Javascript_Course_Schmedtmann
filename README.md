# The Complete JavaScript Course 2018: Schmedtmann

## Challenges and Projects from Schmedtmann's [The Complete JavaScript Course](https://www.udemy.com/the-complete-javascript-course/learn/v4/overview)

### Curriculum

#### Course Intro
#### JavaScript Language Basics
* Coding Challenge 1 - [My Solution](https://github.com/romeojeremiah/Complete_Javascript_Course_Schmedtmann/blob/master/codingChallenge1.js)
* Coding Challenge 2 - [My Solution](https://github.com/romeojeremiah/Complete_Javascript_Course_Schmedtmann/blob/master/codingChallenge2.js)
* Coding Challenge 3 - [My Solution](https://github.com/romeojeremiah/Complete_Javascript_Course_Schmedtmann/blob/master/codingChallenge3.js)
* Coding Challenge 4 - [My Solution](https://github.com/romeojeremiah/Complete_Javascript_Course_Schmedtmann/blob/master/codingChallenge4.js)
* Coding Challenge 5 - [My Solution](https://github.com/romeojeremiah/Complete_Javascript_Course_Schmedtmann/blob/master/codingChallenge5.js)
#### How JavaScript Works Behind the Scenes
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
           2. Code is scanned for function declarations -> pointing to the function
           3. Code is scanned for variable declarations -> **setting variables to undefined**
        2. Creation of scope chain
        3. Determine of 'this' variable
     2. In the Execution Phase:
        1. Code of function generated in the current execution context is ran line by line
 
 
#### JavaScript in the Browser: DOM Manipulation and Events
* Coding Challenge 6
#### Advanced JavaScript: Objects and Functions
* Coding Challenge 7
#### Putting it all Together: The Budget App Project
* The Budget App Project
#### Next Generation JavaScript: Intro to ES6/ES2015
* Coding Challenge 8
#### Asynchronous JavaScript: Promises, Async/Await and AJAX
#### Modern JavaScript: Using ES6, NPM, Babel and Webpack
* Recipe Searching App
#### Bonus: A Node.js Crash Course
* The Laptop Store Project






