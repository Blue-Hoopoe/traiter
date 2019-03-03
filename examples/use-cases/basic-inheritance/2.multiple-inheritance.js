const Trait = require('./../../dependencies/classes/Trait');
const iLogable = require('./../../dependencies/classes/traits/iLogable');
const iCalcable = require('./../../dependencies/classes/traits/iCalcable');

class Mutated extends Trait.implement(iLogable, iCalcable) {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
}

let mutated = new Mutated(19, 96);
mutated.log(
    mutated.add()
);