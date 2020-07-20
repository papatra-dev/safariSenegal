import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'accueil', loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule) },
  { path: '', loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule) },
  { path: 'circuits', loadChildren: () => import('./circuits/circuits.module').then(m => m.CircuitsModule) },
  { path: 'hebergements', loadChildren: () => import('./hebergements/hebergements.module').then(m => m.HebergementsModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'reservation', loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
