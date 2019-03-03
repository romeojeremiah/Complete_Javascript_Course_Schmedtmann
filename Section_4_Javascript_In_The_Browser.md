# JavaScript in the Browswer: DOM Manipulation and Events

* The DOM and DOM Manipulation

  The DOM is used to connect webpages to scripts like JavaScript. For each HTML box, the is an object in the DOM we can access and    interact with using JavaScript. JavaScript and the DOM are two different things. JavaScript is one way to manipulate the Document Object Model
  
* DOM Access and Manipulation
  * How to create fundamental game variables
    
  * How to generate a random number
  ```javascript
  Math.random() // Gives random number between 0 and .99
  Math.random() * 6 // Gives random number between 0 and 5.99
  (Math.random() * 6) + 1 // Gives random number between 1 and 6.99
  Math.floor((Math.random() * 6) + 1) // Removes decimal to give random number between 1 and 6
  ```
  * How to manipulate the DOM
  ```javascript
  document object //gives access to the DOM
  document.querySelector() //allows to select first html element using css selectors
  .textContent //property to select plain text
  .innerHTML //property to select and change text with HTML. Needs to be in a string i.e. '<em>23</em>'
  Example: document.querySelector('#elementselection').textContent = 'dice' 
  //sets text content of elementselection to the word dice
  ```
  * How to read from the DOM
  ```javascript
  var x = document.querySelector('#elementselection').textContent 
  //puts text content of element selection in to x variable
  ```
  * How to change CSS styles
  ```javascript
  Select element and apply the .style method
   i.e. document.querySelector('.dice').style.display = 'none'
  ```
* Events and Event Handling
  
  Events are notifications that are sent to notify when something happens in the browswer. Event listeners are functions that perform an   action based on the event. Events are only processed after the execution stack is empty. Events are held in message queues.
  
  * How to set up an event handler
  ```javascript
  document.querySelector('.btn-roll').addEventListener('event type', callback function)

  document.querySelector('.btn-roll').addEventListener('event', function) 
  //function does not need to be called with () because we want the event to invoke the function
  //if we used (), the function would automatically run
  //to make the event invoke the function, just provide the function's name
  ```
  Types of events: [MDN event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

  * What is a callback function
  
  A function that is passed into another fuction as an argument

  * What is an anonymous function
  
  A function that does not have a name
  ```
  function (name) {
  //do something
  } //not anonymous
  function(){
  //do something
  } //anonymous
  
  document.querySelector('.btn-roll').addEventListener('click', function() {
  //do something
  });
  ```
  * Another way to select elements by ID
  ```
  document.getElementyByID('element').textContent
  //this selector does not require the # like query selector does. 
  //It just requires the string name of the element
  ```
   * How to change the image in an <img> element 
  ```
  //2 different ways 
  document.querySelector('.element').src = '/dice.png'

  document.querySelector('.element').setAttribute('src', '/dice.png');
  ```
* Updating Scores and Changing the Active Player
  
  * What is the ternary operator
    
  Ternary operator is a short-hand version of one if-else statement
  (Condition to Test) ? if TRUE = {run this code} : if FALSE = {run this code
  ```javascript
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    ```
  * How to add, remove and toggle HTML classes
  ```
  //remove a class by using the classList method
  document.querySelector('.player-0-panel').classList.remove('active');
  //add a class by using the classList method, then add method
  document.querySelector('.player-0-panel').classList.add('active');
  //toggle a class by using the classList method, then toggle method
  document.querySelector('.player-0-panel').classList.remove('toggle');
  ```
* Implementing 'Hold' Function and the DRY Principle

  * How to use function to apply DRY
   
  Use functions as often as possible to prevent repeating code. DRY equal 'Dont Repeat Yourself'.
  
  * How to think like a programmer

* Creating a Game Initializing Function

  This section implemented the init function and continued with the DRY principle

* Finishing Touches: State Variables
  
  A state variable tells us the condition of a system. 
  In the code example, we want to keep track whether the game is being played or not.
  ```javascript
  var gamePlaying = true;
  
  if (gamePlaying){
    //do something
  }
  ```
  
 
  
  
