import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pokemons',
    templateUrl: './pokemons.component.html'
})
export class PokemonsComponent {
    @Input() pokemonsList: string[];
}