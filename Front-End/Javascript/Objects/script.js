// let animal1 = new Animal();
// console.log(animal1.name);
// console.log(animal1.type);

// // Hoisting is not possible with variable class  
// let Animal = class {
//     constructor() {
//         this.name = "syed saleem";
//         this.type = "Human";
//     }  
// }
// class Animal {
//     constructor() {
//         this.name = "syed saleem";
//         this.type = "Human";
//     }
// }
// class Dog extends Animal {
//     constructor() {
//         super();
//         this.breed = "Labrador";
//     }   
// }
// let dog1 = new Dog();
// console.log(dog1.name);
// console.log(dog1.type);
// console.log(dog1.breed);

class Animal {
    constructor(){
        this._age = 17;
    }

    set umar(val) {
        if (val>0){
            console.error("Not Possible");
            return;
        }
        this._age = val
        return this._age
    }

    get umar(){
        return this._age
    }
}

let a1 = new Animal()
console.log(a1.umar)