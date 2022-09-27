import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchBarComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    PokemonDetailComponent,
    NavigationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
