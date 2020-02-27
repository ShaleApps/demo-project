import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '~environments/environment';
import { Pokemon } from '~models/pokemon';
import * as fromRouterConstants from '../../app-routing.constants';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pokemon',
  styleUrls: ['./pokemon.component.scss'],
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {
  public pokemon: Pokemon;
  constructor(private http: HttpClient, private router: ActivatedRoute) {}

  public ngOnInit(): void {
    const pokemonId = this.router.snapshot.paramMap.get(fromRouterConstants.POKEMON_ID);
    this.http.get<Pokemon>(`${environment.apiBaseUrl}/pokemon/${pokemonId}`).subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  }
}
