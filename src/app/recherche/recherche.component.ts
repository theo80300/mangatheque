import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent {
  rechercheValue: string = '';
  rechercheValue2: string = '';
  constructor(private router: Router) { }

  @Output() rechercheEffectuee = new EventEmitter<string>();

  effectuerRecherche(): void {
    this.rechercheEffectuee.emit(this.rechercheValue);
    localStorage.setItem("recherche-anime", this.rechercheValue)
    //this.router.navigate(['/animerecherche'])

  }

  effectuerRecherche2(): void {
    this.rechercheEffectuee.emit(this.rechercheValue2);
    localStorage.setItem("recherche-manga", this.rechercheValue2)
  }
}
