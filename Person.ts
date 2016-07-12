class Person {
    constructor(public name:string, public age:number) {
        
    }
}

/**
 * Man extends Person
 */
class Man extends Person {
    constructor(name:string, age:number) {
        super(name,age);
    }
    
    getDescription():string{
        return this.name + " is " + this.age + " years old!";
    }
   
}

/**
 * Main
 */
class Main {
    static lee:Man = new Man ("Lee", 39);

}
var main = new Main();
console.log(Main.lee.getDescription());