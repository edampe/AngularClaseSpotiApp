
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { SearchComponent } from '../app/components/search/search.component';
import { ArtistaComponent } from '../app/components/artista/artista.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: SearchComponent },
  { path: 'artista/:id', component: ArtistaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export class NameRoutingModule { }

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
