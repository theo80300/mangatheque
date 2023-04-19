import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent {
  mangaList: any[] = [];
  selectedMangaCoverUrl: string = '';
  selectedManga: any = {};
  rowsPerPage: number = 4; // spécifiez le nombre de rangées par page
  currentPage: number = 1; // spécifiez le numéro de page par défaut

  constructor(private http: HttpClient) {
    this.getMangaList();
  }

  getMangaList() {
    const query = `query ($page: Int, $perPage: Int) {
      Page (perPage: $perPage, page: $page) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        media (type: MANGA, sort: POPULARITY_DESC) {
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
      page: this.currentPage+1 // spécifier la page à récupérer

    };

    const url = 'https://graphql.anilist.co';
    this.http.post(url, { query, variables }).subscribe((response: any) => {
      this.mangaList = response.data.Page.media;
    });
  }

  onChange(selectedMangaCoverUrl: string) {
    this.selectedMangaCoverUrl = selectedMangaCoverUrl;
    this.selectedManga = this.mangaList.find((manga: any) => manga.coverImage.large === selectedMangaCoverUrl);
  }

  
  onMangaClick(manga: any): void {
    console.log(manga.id);
    console.log(manga.coverImage.large)
  }

  onNextPageClick() {
    if (this.currentPage < this.mangaList.length / this.rowsPerPage - 1) {
      this.currentPage++;
      this.getMangaList();
    }
  }

  onPrevPageClick() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getMangaList();
    }
  }
}