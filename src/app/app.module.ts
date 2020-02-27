import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { components } from './components';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { TurtleInterceptorService } from './turtle-interceptor.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ...components, PokemonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TurtleInterceptorService, multi: true }],
})
export class AppModule {}
