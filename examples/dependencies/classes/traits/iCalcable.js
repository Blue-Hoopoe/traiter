const Trait = require('./../Trait');

module.exports = new Trait(Base => class iCalcable extends Base {

    add() {
        return this.x + this.y;
    }
    
    sub() {
        return this.x - this.y;
    }

});