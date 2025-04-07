// Class
class Greeter {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      return `Hello, ${this.name}!`;
    }
  }
  
  // Promise
  function delayedMessage(msg, delay) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(msg), delay);
    });
  }
  
  // Async
  async function getMessage() {
    const msg = await delayedMessage("This is an async message.", 1000);
    return msg;
  }
  
  // Map
  const capitals = new Map();
  capitals.set("France", "Paris");
  capitals.set("Japan", "Tokyo");
  
  // Export

  export { Greeter, delayedMessage, getMessage, capitals };
  