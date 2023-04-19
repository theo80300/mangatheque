import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'projet';
  collapsed: boolean = true;

  constructor(private route: ActivatedRoute,
    private router: Router, private keycloakService: KeycloakService) { }
  ngOnInit(): void {
    const token = this.keycloakService.getKeycloakInstance().idToken;
    console.log(localStorage.getItem("token"))


    /////////Code pour pouvoir envoyer le token a l api///////////



    if (token) {
      // Décoder la partie payload du token
      const payload = JSON.parse(atob(token.split('.')[1]));
    
      // Extraire l'ID utilisateur du payload
      const userId = payload.sub;
      localStorage.setItem("userId",userId)
    
      console.log('ID utilisateur : ', userId);
    } else {
      console.log('Le token d\'authentification n\'est pas défini'); // j'ai recup le code d'id et set dans le local storage
    }
  }


  logout() {
    this.keycloakService.logout();
  }
  
  isCollapsed() {
    return this.collapsed ? "collapsed" : "";
  }

  recherche: string = '';

  onRechercheEffectuee(value: string): void {
    this.recherche = value;
  }
}
