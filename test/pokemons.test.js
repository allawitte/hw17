var pokemon = require('../src/pokemon');
var pokemonList = require('../src/pokemons')
var assert = require('assert');
describe('Create a new pokemon', function () {
    var Poky = {};
    before(function(){
        Poky = new pokemon('angst',100);
    });
    it('should return Pokemon name = angst', function(){

       assert.equal(Poky.name, 'angst');
    });
    it('should return Pokemon level = 100', function(){
        //var Poky = new pokemon('angst',100);
        assert.equal(Poky.level, 100);
    });
});
describe('Create a list of pokemons', function(){
    before(function(){
        Poky0 = new pokemon('Augusto',100);
        Poky1 = new pokemon('Tito',20);
        Poky2 = new pokemon('Mamba',102);
    });
    it('should return an empty list', function(){
        var list = new pokemonList();
        assert.deepEqual(list, []);
    })
    it('should return a list with 3 pokemons ', function(){
        var list = new pokemonList(Poky0, Poky1, Poky2);
        assert.equal(list.length, 3);
    })
    it('should return a pokemon with max level {name: Mamba, level: 102} ', function(){
        var list = new pokemonList(Poky0, Poky1, Poky2);
        assert.deepEqual(list.max(), {name: 'Mamba', level: 102});
    })
})
/**
 * Created by HP on 12/11/2016.
 */
