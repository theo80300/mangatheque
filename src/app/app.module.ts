import { NgModule } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MenuGaucheComponent } from './components/menu-gauche/menu-gauche.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { RechercheComponent } from './recherche/recherche.component';
import { MangaListComponent } from './components/manga-list/manga-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MangaNavbarComponent } from './components/manga-navbar/manga-navbar.component';
import { AnimeNavbarComponent } from './components/anime-navbar/anime-navbar.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { MangadetailComponent } from './components/mangadetail/mangadetail.component';
import { AnimedetailComponent } from './components/animedetail/animedetail.component';
import { RegisterComponent } from './components/register/register.component'; // Importer le module HttpClientModule
import { APP_INITIALIZER} from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { initializer } from './initializer';
import { AnimeCollectionComponent } from './components/anime-collection/anime-collection.component';
import { MangaCollectionComponent } from './components/manga-collection/manga-collection.component';
import { NotificationComponent } from './components/notification/notification.component';
import { TimerComponent } from './components/timer/timer.component';
import { AnimeRechercheComponent } from './components/anime-recherche/anime-recherche.component';
import { MangaRechercheComponent } from './manga-recherche/manga-recherche.component';
import { AuthInterceptor } from './auth.interceptor';
import { FiltreAnimeComponent } from './components/filtre-anime/filtre-anime.component';
import {MatCardModule} from '@angular/material/card'




const routes: Routes = [
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MenuGaucheComponent,
    AccueilComponent,
    RechercheComponent,
    MenuGaucheComponent,
    MangaListComponent,
    MangaNavbarComponent,
    AnimeNavbarComponent,
    AnimeListComponent,
    MangadetailComponent,
    AnimedetailComponent,
    RegisterComponent,
    AnimeCollectionComponent,
    MangaCollectionComponent,
    NotificationComponent,
    TimerComponent,
    AnimeRechercheComponent,
    MangaRechercheComponent,
    FiltreAnimeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    KeycloakAngularModule,// Ajouter HttpClientModule à la liste des imports
    MatCardModule
  ],
  providers: [   

    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
