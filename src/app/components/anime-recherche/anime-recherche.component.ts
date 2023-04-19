import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-anime-recherche',
  templateUrl: './anime-recherche.component.html',
  styleUrls: ['./anime-recherche.component.css']
})
export class AnimeRechercheComponent implements OnInit, OnDestroy {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  animeCollection: any[] = [];
  selectedAnimeCoverUrl: string = '';
  selectedAnime: any = {};
  routerSub: any;

  ngOnInit(): void {
    this.start();
    this.routerSub = this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) this.start();
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  start() {
    const animerecherche = localStorage.getItem("recherche-anime");
    this.getAnimeCollection(animerecherche);
  }

  getAnimeCollection(animerecherche: String | null) {
    const query = `{
      Page{
        media (search: "${animerecherche}", type: ANIME, isAdult: false) {
          id
          title {
            romaji
            english
            native
          }
          coverImage {
            extraLarge
            large
            medium
            color
          }
          description
        }
      }
    }
    `;

    const variables = {
      animerecherche : animerecherche
    };
  
    const url = 'https://graphql.anilist.co';
    this.http.post(url, { query, variables }).subscribe((response: any) => {
       this.animeCollection = response.data.Page.media;
       console.log(response.data)
    });
  }

  onChange(selectedAnimeCoverUrl: string) {
    this.selectedAnimeCoverUrl = selectedAnimeCoverUrl;
    this.selectedAnime = this.animeCollection.find((anime: any) => anime.coverImage.large === selectedAnimeCoverUrl);
  }

  onAnimeClick(anime: any): void {
    console.log(anime.title.romaji);
  }
}
