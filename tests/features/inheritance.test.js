// Test enviroment preparation.
const Trait = require('../dependencies/classes/Trait');
const iLogable = require('../dependencies/classes/traits/iLogable');

class Mutated extends Trait.implement(iLogable) {
    constructor(message) {
        super();
        this.message = message;
    }
    mutated() {}
    log() { return true; }
}
const message = `traits <3`;


// Defining tests.
test(`Mutated class has its defined methods.`, () => {
    expect(new Mutated().mutated).toBeDefined();
});

test(`Mutated class has defined inherited trait api.`, () => {
    expect(new Mutated().log).toBeDefined();
});

test(`Trait methods should be overriden by base methods.`, () => {
    expect(new Mutated().log).not.toBe(iLogable.stub().log);
});