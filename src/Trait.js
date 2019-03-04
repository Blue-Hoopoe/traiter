/**
 * Helper class that helps inheritance by mixin given traits.
 * Read more: https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Classes#Mix-ins
 */
class Trait { 

    /**
     * Creates a new Trait object.
     * @param {Function} blueprint Handler function. Should take a Base class argument and return a final Trait class.
     */
    constructor(blueprint) {
        this.blueprint = blueprint;
    }

    /**
     * Returns trait constructor given when creating an Trait.
     * @param {Class} Base Class to be passed into blueprint (constructor) function.
     */
    assemble(Base) {
        let assembled;
        try {
            assembled = this.blueprint(Base);
        } catch(exception) {
            throw new Error(`There was a problem with a trait blueprint. More info: ${exception.message}`);
        }
        if (assembled.constructor === undefined || assembled.constructor.name !== `Function`) {
            throw new Error(`Trait's blueprint did not returned a class definition.`);
        }
        return this.blueprint(Base);
    }
}

/**
 * Private combiner function that extends base class with given traits.
 * @param {Class} Base Base class blueprint (not instance).
 * @param  {...Trait} traits Trait objects that needs to enhance base class.
 */
const combiner = (Base, ...traits) => {
    let Mutated = Base;
    traits.forEach(trait => {
        if (!(trait instanceof Trait)) {
            throw new Error(`Trait must be an instance of 'Trait' class.`);
        }
        Mutated = trait.assemble(Mutated);
    });
    return Mutated;
}

/**
 * Extends given class with given traits.
 * @param {Class} Base Base class blueprint (not instance).
 * @param  {...Trait} traits Trait objects that needs to enhance base class.
 */
Trait.extend = (Base, ...traits) => {
    return combiner(Base, ...traits);
}

/**
 * Combines multiple traits into one base class.
 * @param  {...Trait} traits Trait objects that needs to enhance base class.
 */
Trait.implement = (...traits) => { 
    return combiner(class {}, ...traits);
}

module.exports = Trait;