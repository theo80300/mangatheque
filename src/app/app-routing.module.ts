import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuGaucheComponent } from './components/menu-gauche/menu-gauche.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ListeNavbarComponent } from './components/liste-navbar/liste-navbar.component';
import { RechercheComponent } from './components/recherche/recherche.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'liste', component: ListeNavbarComponent },
  { path: 'recherche', component: RechercheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
