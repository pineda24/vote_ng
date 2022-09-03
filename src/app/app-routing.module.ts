import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { MainComponent } from './components/main/main.component';
import { VotationComponent } from './components/votation/votation.component';
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "my-votations", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "votation/:id", component: VotationComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
