import { Component } from '@angular/core';

@Component({
    selector: 'app-pokemons-input',
    templateUrl: './pokemons-input.component.html',
    styleUrls: ['./pokemons-input.component.css']
})
export class PokemonsInputComponent{
    enteredPokemonInput = '';
    OnCreatePokemon()
    {
        console.log('Logo esse pokémon será criado aqui:' + this.enteredPokemonInput);
        this.enteredPokemonInput = '';
    }
}