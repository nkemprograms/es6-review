import { Greeter, delayedMessage, getMessage, capitals } from './tools.js';
// Test Class
const greeter = new Greeter("Sam");
console.log(greeter.greet()); // Hello, Sam!

// Test Promise
delayedMessage("Delayed hello", 500).then(console.log);

// Test Async/Await
getMessage().then(console.log);

// Test Map
console.log(capitals.get("France")); // Paris
console.log(capitals.get("Japan"));  // Tokyo

