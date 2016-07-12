/**
 * Greeter
 */
var GreeterClass = (function () {
    function GreeterClass(message) {
        this.greeting = message;
    }
    GreeterClass.prototype.greet = function () {
        return "Hello, " + this.greeting + this.constructor.name;
    };
    return GreeterClass;
}());
var greeterClass = new GreeterClass("world! From big ol' ");
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeterClass.greet());
};
document.body.appendChild(button);
//# sourceMappingURL=GreeterClass.js.map