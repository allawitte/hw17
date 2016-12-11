'use strict';
class Pokemon {
    constructor(...params) {

        if (params.length == 1 ) {
            params = params[0];
            if (typeof params === "object") {
                this.name = params.name;
                this.level = params.level;
            }
            else console.log('Wrong Pokemon params');
        }
        else if ( params.length == 2){
            this.name = params[0];
            this.level = params[1];
        }
        else console.log('Wrong Pokemon params');

    }

    show() {
        console.log(`Name: ${this.name}, Level: ${this.level}`);
    }

}
module.exports = Pokemon;
/**
 * Created by HP on 12/11/2016.
 */
