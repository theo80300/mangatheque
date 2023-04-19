import { Component, HostListener } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-animedetail',
  templateUrl: './animedetail.component.html',
  styleUrls: ['./animedetail.component.css']
})
export class AnimedetailComponent {
  selectedAnimeCoverUrl: string = '';
  selectedAnime: any = {};

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const animeId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAnimeDetail(animeId);
    console.log(animeId)

  }



  getAnimeDetail(animeId: number) {
    const query = `
      query ($id: Int) {
        Media (id: $id, type: ANIME) {
          id
          title {
            romaji
            english
            native
          }
          episodes
          nextAiringEpisode{
            episode
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
      id: animeId
    };

    const url = 'https://graphql.anilist.co';
    this.http.post(url, { query, variables }).subscribe((response: any) => {
      this.selectedAnime = response.data.Media;
      console.log(this.selectedAnime.coverImage.extraLarge);
      
    });
  }




  

  onLikeClick() {//Dans ce code, j'ai changé les parametres, user id et id anime 
    console.log("yes")
    console.log(this.selectedAnime.episodes)
    if(this.selectedAnime.episodes != null){
      console.log("je suis dans le if")
      console.log(this.selectedAnime.episodes)
      const body = {
        id: Number(this.route.snapshot.paramMap.get('id')),
        id_user: localStorage.getItem("userId"),
        episode: this.selectedAnime.episodes
      };
      this.http.post("http://localhost:8090/api/animes", body).subscribe(
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
    else{
      console.log("je suis dans le else")
      console.log(this.selectedAnime.nextAiringEpisode.episode-1)
      const body = {
        id: Number(this.route.snapshot.paramMap.get('id')),
        id_user: localStorage.getItem("userId"),
        episode: this.selectedAnime.nextAiringEpisode.episode-1
      };
      this.http.post("http://localhost:8090/api/animes", body).subscribe(
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

    console.log(this.selectedAnime)

    console.log(localStorage.getItem("userId"))

  }

  onDislikeClick(){
    this.http.delete("http://localhost:8090/api/animes?id="+String(Number(this.route.snapshot.paramMap.get('id')))+"&id_user="+localStorage.getItem("userId")).subscribe(
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
    console.log("http://localhost:8090/api/animes/1?id="+String(this.route.snapshot.paramMap.get('id')))
  }


}

