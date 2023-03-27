import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MenuGaucheComponent } from './components/menu-gauche/menu-gauche.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ListeNavbarComponent } from './components/liste-navbar/liste-navbar.component';
import { Recherche}

const routes: Routes = [  { path: '', component: AccueilComponent },
{ path: 'liste', component: ListeNavbarComponent },
{ path: 'menu', component: MenuGaucheComponent },
{ path: 'recherche', component: RechercheComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
