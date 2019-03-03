const Trait = require('./../Trait');

module.exports = new Trait(Base => class iLogable extends Base {

    log(message) {
        console.log(message);
    }

});