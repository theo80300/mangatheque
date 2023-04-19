import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filtre-anime',
  templateUrl: './filtre-anime.component.html',
  styleUrls: ['./filtre-anime.component.css']
})
export class FiltreAnimeComponent implements OnInit {
  popularities: string[] = ['Populaire', 'Peu populaire', 'Très populaire'];
  selectedPopularity: string = '';

  statuses: string[] = ['Terminé', 'En cours', 'À venir', 'Abandonné'];
  selectedStatus: string = '';

  genres: string[] = [];
  selectedGenre: string = '';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(): void {
    const query = `
      query {
        GenreCollection
      }
    `;

    this.http.post<any>('https://graphql.anilist.co', { query }).subscribe(response => {
      this.genres = response.data.GenreCollection;
      console.log(this.genres)
    });
  }

}
