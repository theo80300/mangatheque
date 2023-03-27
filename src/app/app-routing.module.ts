import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [  { path: '', component: AccueilComponent },
{ path: 'liste', component: ListeNavbarComponent },
{ path: 'menu', component: MenuGaucheComponent },
{ path: 'recherche', component: RechercheComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
