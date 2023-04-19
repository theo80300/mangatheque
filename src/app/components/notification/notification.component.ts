import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() tempsRestant: number = 0;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  animeCollection: any[] = [];
  selectedAnimeCoverUrl: string = '';
  selectedAnime: any = {};

  

  ///////constante pour le timer/////////////////


  ngOnInit(): void {

    this.http.get("http://localhost:8090/api/animes/list?id_user=" + localStorage.getItem("userId")).subscribe(
      (response: any) => {
        const animeList = response.map((anime: any) => anime.id);
        console.log(animeList); // Affiche une liste d'ids
        console.log("je suis bien ici")
        let longueur = animeList.length

        this.getAnimeCollection(animeList)

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

  

  getAnimeCollection(animeList:number[]) {
    const query = `{
      Page{
        media (id_in: [${animeList.join(', ')}], type: ANIME) {
          id
          title {
            romaji
            english
            native
          }
          episodes
          nextAiringEpisode{
            episode
            timeUntilAiring
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
      animeList:animeList
    };

    const url = 'https://graphql.anilist.co';
    this.http.post(url, { query, variables }).subscribe((response: any) => {
      this.animeCollection = response.data.Page.media;
    });

  }




}
