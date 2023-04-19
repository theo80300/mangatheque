import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { AppComponent } from 'src/app/app.component';
import { RechercheComponent } from 'src/app/recherche/recherche.component';

@Component({
  selector: 'app-menu-gauche',
  templateUrl: './menu-gauche.component.html',
  styleUrls: ['./menu-gauche.component.css']
})
export class MenuGaucheComponent extends AppComponent{

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
