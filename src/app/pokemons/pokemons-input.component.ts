import { Component } from '@angular/core';

@Component({
    selector: 'app-pokemons-input',
    templateUrl: './pokemons-input.component.html',
    styleUrls: ['./pokemons-input.component.css']
})
export class PokemonsInputComponent{
    OnCreatePokemon()
    {
        console.log('Logo pokémons serão criados aqui!');
    }
}