import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { MainComponent } from './components/main/main.component';
import { LogInComponent } from './components/start-session/log-in/log-in.component';
import { SignUpComponent } from './components/start-session/sign-up/sign-up.component';
import { StartSessionComponent } from './components/start-session/start-session.component';
import { CreateVotationComponent } from './components/votation/create-votation/create-votation.component';
import { VotationComponent } from './components/votation/votation.component';
import { SecurityGuard } from './services/security.guard';
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "my-votations",  canActivate: [SecurityGuard],component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "votations/create", component: CreateVotationComponent },
      { path: "votations/:id", component: VotationComponent },
    ],
  },
  { path: "account", component: StartSessionComponent, children:[
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LogInComponent },
    { path: "signup", component: SignUpComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
