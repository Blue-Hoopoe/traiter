const Trait = require('./../../dependencies/classes/Trait');
const Base = require('./../../dependencies/classes/Base');
const iLogable = require('./../../dependencies/classes/traits/iLogable');
const iCalcable = require('./../../dependencies/classes/traits/iCalcable');

class Mutated extends Trait.extend(Base, iLogable, iCalcable) {
}

let mutated = new Mutated();
mutated.log(
    mutated.isBase()
);