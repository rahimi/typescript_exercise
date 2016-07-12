/**
 * Greeter
 */
class GreeterClass {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    
    greet() {
        return "Hello, " + this.greeting + this.constructor.name;
    }
}

var greeterClass = new GreeterClass("world");

var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeterClass.greet());
}

document.body.appendChild(button);