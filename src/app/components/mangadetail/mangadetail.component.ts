import { Component, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mangadetail',
  templateUrl: './mangadetail.component.html',
  styleUrls: ['./mangadetail.component.css']
})
export class MangadetailComponent {
  selectedMangaCoverUrl: string = '';
  selectedManga: any = {};

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const mangaId = Number(this.route.snapshot.paramMap.get('id'));
    this.getMangaDetail(mangaId);
  }

  getMangaDetail(mangaId: number) {
    const query = `
      query ($id: Int) {
        Media (id: $id, type: MANGA) {
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
    `;

    const variables = {
      id: mangaId
    };


    const url = 'https://graphql.anilist.co';
    this.http.post(url, {query, variables}).subscribe((response: any) => {
      this.selectedManga = response.data.Media;
    });
  }

  onLikeClick() {//Dans ce code, j'ai changé les parametres, user id et id anime 
    const id_manga = localStorage.getItem("userId")?.replace(/-/g,'');
    const body = {
      id: Number(this.route.snapshot.paramMap.get('id')),
      id_user: localStorage.getItem("userId")
    };
    console.log(localStorage.getItem("userId"))
    this.http.post("http://localhost:8090/api/mangas", body).subscribe(
      (response: any) => {
        console.log(response.sta);
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
  }

  onDislikeClick(){
    this.http.delete("http://localhost:8090/api/mangas?id="+String(Number(this.route.snapshot.paramMap.get('id')))+"&id_user="+localStorage.getItem("userId")).subscribe(
      (response: any) => {
        console.log(response.sta);
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
    console.log("http://localhost:8090/api/mangas/1?id="+String(this.route.snapshot.paramMap.get('id')))
  }
}