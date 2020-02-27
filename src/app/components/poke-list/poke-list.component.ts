import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '~environments/environment';

const pokeListUrl = `${environment.apiBaseUrl}/pokemon/`;

export interface PokeListSummary {
  name: string;
  url: string;
}

export interface PokeListSummaryWithId extends PokeListSummary {
  id: number;
}

export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokeListSummary[];
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-poke-list',
  styleUrls: ['./poke-list.component.scss'],
  templateUrl: './poke-list.component.html',
})
export class PokeListComponent implements OnInit {
  public pokemon$$ = new BehaviorSubject<PokeListSummaryWithId[]>([]);
  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    this.getPokemonList();
  }

  private async getPokemonList() {
    const pokeList = await this.http.get<PokemonListResponse>(pokeListUrl).toPromise();
    this.pokemon$$.next(pokeList.results.map(includeId));
  }
}

function includeId(listItem: PokeListSummary): PokeListSummaryWithId {
  const id = +listItem.url.replace(pokeListUrl, '').replace('/', '');
  return {
    ...listItem,
    id,
  };
}
