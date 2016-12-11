'use strict';
var Pokemon = require('../src/pokemon');

class PokemonList extends Array {

    add(obj) {

        this.push(new Pokemon(obj));
    }

    show() {
        console.log(`Number of pocemons in the list: ${this.length}`);
        this.forEach(item => {
            item.show();
        });
    }

    max() {
        if (this.length == 0) {
            return 'List is empty';
        }
        if (this.length == 1) {
            return this[0];
        }
        var maxVal = this[0];
        this.forEach((item, i) => {
            if (maxVal.level < item.level) {
                maxVal = this[i];
            }
        });

        return maxVal;
    }

    valueOf() {
        let res = [];
        this.forEach(item => {
            res.push(item.name + ':' + item.level);
        });
        return res;
    }
}


module.exports = PokemonList;

/**
 * Created by HP on 12/11/2016.
 */
