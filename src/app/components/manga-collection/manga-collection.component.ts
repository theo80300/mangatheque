import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manga-collection',
  templateUrl: './manga-collection.component.html',
  styleUrls: ['./manga-collection.component.css']
})
export class MangaCollectionComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8090/api/mangas/list?id_user=" + localStorage.getItem("userId")).subscribe(
      (response: any) => {
        const mangaList = response.map((manga: any) => manga.id);
        console.log(mangaList); // Affiche une liste d'ids
        console.log("je suis bien ici")
        let longueur = mangaList.length
        this.getMangaCollection(mangaList)


        if (response["message"] === "Authentication successful") {
          // Connexion réussie 
          console.log("ajout dans la bdd de l'anime");
        } else {
          // Échec de la connexion
          console.log("echec");
        }

      },
      error => {
        console.error(error);
      }
    );
    console.log(this.http.get("http://localhost:8090/api/mangas/list?id_user=" + localStorage.getItem("userId")))
  }

  mangaCollection: any[] = [];
  selectedMangaCoverUrl: string = '';
  selectedManga: any = {};


  getMangaCollection(mangaList:number[]) {
    const query = `{
      Page{
        media (id_in: [${mangaList.join(', ')}], type: MANGA) {
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
      mangaList:mangaList
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
