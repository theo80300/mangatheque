import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {
  animeList: any[] = [];
  selectedAnimeCoverUrl: string = '';
  selectedAnime: any = {};
  rowsPerPage: number = 4; // spécifiez le nombre de rangées par page
  currentPage: number = 1; // spécifiez le numéro de page par défaut

  constructor(private http: HttpClient) {
    this.getAnimeList();
  }

  getAnimeList() {
    const query = `query ($page: Int,$perPage: Int) {
      Page (perPage: $perPage, page: $page) { 
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        media (type: ANIME, sort: POPULARITY_DESC) {
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
    }`;

    const variables = {
      perPage: 50,
      page: this.currentPage + 1 // spécifier la page à récupérer
    };


    const url = 'https://graphql.anilist.co';
    this.http.post(url, { query, variables }).subscribe((response: any) => {
      this.animeList = response.data.Page.media;
    });
  }

  onChange(selectedAnimeCoverUrl: string) {
    this.selectedAnimeCoverUrl = selectedAnimeCoverUrl;
    this.selectedAnime = this.animeList.find((anime: any) => anime.coverImage.large === selectedAnimeCoverUrl);
  }

  test(){
      this.animeList = [];
  }

  test2(){
    this.getAnimeList();
}

  onAnimeClick(anime: any): void {
    console.log(anime.title.romaji);
  }

  onNextPageClick() {
    if (this.currentPage < this.animeList.length / this.rowsPerPage - 1) {
      this.currentPage++;
      this.getAnimeList();
    }
  }

  onPrevPageClick() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getAnimeList();
    }
  }
}

