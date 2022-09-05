import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/main/home/home.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/main/header/header.component';
import { VotationCardComponent } from './molecules/votation-card/votation-card.component';
import { CreateVotationComponent } from './components/votation/create-votation/create-votation.component';
import { VotationComponent } from './components/votation/votation.component';

// PRIMENG MODULES
import {CheckboxModule} from 'primeng/checkbox';
import { OptionCardComponent } from './molecules/option-card/option-card.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    HeaderComponent,
    VotationCardComponent,
    CreateVotationComponent,
    VotationComponent,
    OptionCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    CheckboxModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
