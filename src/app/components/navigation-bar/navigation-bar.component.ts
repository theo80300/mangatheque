import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  @Output() toggleBar: EventEmitter<any> = new EventEmitter();
  @Output() rechercheEffectuee: EventEmitter<any> = new EventEmitter();
  searchTerm: string = '';

  resultatRecherche!: string;

  afficherResultatRecherche(resultat: string) {
    this.resultatRecherche = resultat;
  }

  logResults(event: any) {
    this.rechercheEffectuee.emit(event);
  } 

}
