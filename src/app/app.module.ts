import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MenuGaucheComponent } from './components/menu-gauche/menu-gauche.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ListeNavbarComponent } from './components/liste-navbar/liste-navbar.component';
import { RechercheComponent } from './components/recherche/recherche.component';



const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'liste', component: ListeNavbarComponent },
  { path: 'menu', component: MenuGaucheComponent },
  { path: 'recherche', component: RechercheComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MenuGaucheComponent,
    AccueilComponent,
    ListeNavbarComponent,
    RechercheComponent,
    MenuGaucheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
