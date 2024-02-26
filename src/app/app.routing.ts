import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './authentification/sign-in/sign-in.component';
import {HomeComponent} from './home/home.component';
import {GuardService} from './authentification/guard.service';

const routes: Routes = [
  {
    path: 'connexion', component: SignInComponent
  },
  {
    path: 'home', component: HomeComponent , canActivate:[GuardService]
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: true //au cas où il ya des erreurs qu'on puisse les afficher
    })
  ],
  providers: []
})
export class AppRoutingModule {
}
