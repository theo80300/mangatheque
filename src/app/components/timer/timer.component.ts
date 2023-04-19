import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit{

  @Input()
  tempsRestant!: number;

  private secondesParJour = 86400;
  private secondesParHeure = 3600;
  private secondesParMinute = 60;
  public tempsRestantTexte = '';


  ngOnInit(): void {
    this.updateTempsRestantTexte();

    setInterval(() => {
      this.tempsRestant--;
      this.updateTempsRestantTexte();
    }, 1000);
  }
  updateTempsRestantTexte() {
    const jours = Math.floor(this.tempsRestant / this.secondesParJour);
    const heures = Math.floor((this.tempsRestant % this.secondesParJour) / this.secondesParHeure);
    const minutes = Math.floor((this.tempsRestant % this.secondesParHeure) / this.secondesParMinute);
    const secondes = Math.floor(this.tempsRestant % this.secondesParMinute);

    this.tempsRestantTexte = '';
    if (jours > 0) {
      this.tempsRestantTexte += `${jours}j `;
    }
    if (heures > 0) {
      this.tempsRestantTexte += `${heures}h `;
    }
    if (minutes > 0) {
      this.tempsRestantTexte += `${minutes}m `;
    }
    this.tempsRestantTexte += `${secondes}s`;
  }

}
