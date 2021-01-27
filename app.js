class Creature {
    //creates instance of Creature with properties name, age, and location
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    //changes location
    changeLocation(newLoc) {
        this.location = newLoc;
    }
}

class Mermaid extends Creature {
    //creates instance of Mermaid with Creature properites plus numShellsCollected, an array of strings
    constructor(name, age, location, numShellsCollected) {
        super(name, age, location);
        this.numShellsCollected = numShellsCollected;
    }

    findShell() {
        this.numShellsCollected++;
    }
}

class Werewolf extends Creature {
    //creates instance of Werewolf with Creature properties plus isHungry, a boolean value
    constructor(name, age, location, isHungry = true) {
        super(name, age, location);
        this.isHungry = isHungry;
    }

    //feeds the Werewolf.  If they are hungry, changes isHungry to false, if they are not hungry, prints message to console.
    eat() {
        if(this.isHungry) {
            this.isHungry = false;
        } else {
            console.log('Oh no I think I ate too much')
        }
    }
}

//below we will test our classes by instantiating them, calling each method, and verifying output

//create instances of each class
let judy = new Creature('Judy', 21, 'Texas');
let ariel = new Mermaid('Ariel', 30, 'Pacific Ocean', 300);
let jacob = new Werewolf('Jacob', 25, 'Redwoods', true);

//log each instance
console.log(judy);
console.log(ariel);
console.log(jacob);

//call the method from the parent class to ensure it works as expected
judy.changeLocation('Bali');
ariel.changeLocation('Atlantic Ocean');
jacob.changeLocation('Yosemite');

//log the objects after calling .changeLocation() to verify it worked as intended
console.log(judy);
console.log(ariel);
console.log(jacob);

//call .eat()
jacob.eat();
console.log(jacob);

//check that .findShell() wworks as expected
ariel.findShell();
console.log(ariel);