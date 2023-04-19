import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuGaucheComponent } from './components/menu-gauche/menu-gauche.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MangaNavbarComponent } from './components/manga-navbar/manga-navbar.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AnimeNavbarComponent } from './components/anime-navbar/anime-navbar.component';
import { MangadetailComponent } from './components/mangadetail/mangadetail.component';
import { AnimedetailComponent } from './components/animedetail/animedetail.component';
import { AuthGuard } from './guard/my-auth-guard';
import { AnimeCollectionComponent } from './components/anime-collection/anime-collection.component';
import { MangaCollectionComponent } from './components/manga-collection/manga-collection.component';
import { AnimeRechercheComponent } from './components/anime-recherche/anime-recherche.component';
import { MangaRechercheComponent } from './manga-recherche/manga-recherche.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'manganavbar', component: MangaNavbarComponent , canActivate:[AuthGuard], data:{roles:""}},
  { path: 'animenavbar', component: AnimeNavbarComponent },
  {path : 'anime-collection', component: AnimeCollectionComponent},
  {path : 'manga-collection', component: MangaCollectionComponent},
  { path: 'menu', component: MenuGaucheComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: 'manga/:id', component: MangadetailComponent },
  { path: 'anime/:id', component: AnimedetailComponent },
  {path: 'animerecherche/:id', component: AnimeRechercheComponent, pathMatch: 'full'},
  {path: 'mangarecherche/:id', component: MangaRechercheComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
