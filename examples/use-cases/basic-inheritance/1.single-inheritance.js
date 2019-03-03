const Trait = require('./../../dependencies/classes/Trait');
const iLogable = require('./../../dependencies/classes/traits/iLogable');

class Mutated extends Trait.implement(iLogable) {
    constructor(message) {
        super();
        this.message = message;
    }
}

let mutated = new Mutated(`I've implemented a iLogable trait <3`);
mutated.log(mutated.message);