import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '~environments/environment';
import { Pokemon } from '~models/pokemon';
import * as fromRouterConstants from '../../app-routing.constants';
import { Observable } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pokemon',
  styleUrls: ['./pokemon.component.scss'],
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {
  public pokemon$: Observable<Pokemon>;
  constructor(private http: HttpClient, private router: ActivatedRoute) {}
  public pokeSprite;

  public ngOnInit(): void {
    const pokemonId = this.router.snapshot.paramMap.get(fromRouterConstants.POKEMON_ID);
    this.pokemon$ = this.http.get<Pokemon>(`${environment.apiBaseUrl}/pokemon/${pokemonId}`);

    this.pokemon$.subscribe((data) => {
      this.pokeSprite = data.sprites;
    });
    this.rotateSprite();
  }

  public rotateSprite(): void {}
}
