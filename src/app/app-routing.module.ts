import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromRouterConstants from './app-routing.constants';
import * as fromComponents from './components';

const routes: Routes = [
  {
    component: fromComponents.PokemonComponent,
    path: `pokemon/:${fromRouterConstants.POKEMON_ID}`,
  },
  {
    component: fromComponents.PokeListComponent,
    path: 'pokemon',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemon',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
