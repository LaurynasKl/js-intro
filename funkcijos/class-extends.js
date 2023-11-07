console.clear();

class Pet {
    constructor(name, color){
        this.name = name;
        this.color = color;
        this.sound = 'Miau au Cypt'
    }

    setColor(newColor){
        this.color = newColor;
        return 
    }
    sayHi(){
        return `${this.name}: ${this.sound}, as esu ${this.color} spalvos!`
    }
}

class Dog extends Pet {
    constructor(name, color){
        super(name,color);
        this.sound = 'au au';
    }
}

class Cat extends Pet {
    constructor(name, color){
        super(name,color);
        this.sound = 'miau miau';
    }
}
//class Cat extends Pet {
    // sayHi(){
    //     return `${this.name} miau miau, as esu ${this.color} spalvos!`
    // }
// }

class Hamster extends Pet {
    constructor(name, color){
        super(name,color);
        this.sound = 'cypt';
    }
}


const rex = new Dog('Rex', 'juodos')
console.log(rex.sayHi());

const tom = new Hamster('Tom', 'pilkos')
console.log(tom.sayHi());

const garfildas = new Cat('Garfildas', 'oranzines')
console.log(garfildas.sayHi());