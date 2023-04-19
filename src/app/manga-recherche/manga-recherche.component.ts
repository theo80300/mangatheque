import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-manga-recherche',
  templateUrl: './manga-recherche.component.html',
  styleUrls: ['./manga-recherche.component.css']
})
export class MangaRechercheComponent implements OnInit, OnDestroy {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  mangaCollection: any[] = [];
  selectedMangaCoverUrl: string = '';
  selectedManga: any = {};
  routerSub : any;


  ngOnInit(): void {
    this.start();
    this.routerSub = this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) this.start();
    });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  start(): void {
    const mangarecherche = localStorage.getItem("recherche-manga")
    this.getMangaCollection(mangarecherche)
  }


  getMangaCollection(mangarecherche: String | null) {
    const query = `{
      Page{
        media (search: "${mangarecherche}", type: MANGA, isAdult:false) {
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
      mangarecherche:mangarecherche
    };

    const url = 'https://graphql.anilist.co';
    this.http.post(url, { query, variables }).subscribe((response: any) => {
      this.mangaCollection = response.data.Page.media;
    });
  }
  onChange(selectedAnimeCoverUrl: string) {
    this.selectedMangaCoverUrl = selectedAnimeCoverUrl;
    this.selectedManga = this.mangaCollection.find((anime: any) => anime.coverImage.large === selectedAnimeCoverUrl);
  }
  onMangaClick(manga: any): void {
    console.log(manga.id);
    console.log(manga.coverImage.large)
  }
}
