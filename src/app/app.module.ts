import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MenuGaucheComponent } from './components/menu-gauche/menu-gauche.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ListeNavbarComponent } from './components/liste-navbar/liste-navbar.component';
import {R}
import { RouterEvent } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MenuGaucheComponent,
    AccueilComponent,
    ListeNavbarComponent,
    RechercheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
