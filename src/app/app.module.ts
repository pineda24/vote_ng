import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/main/home/home.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/main/header/header.component';
import { VotationCardComponent } from './molecules/votation-card/votation-card.component';
import { CreateVotationComponent } from './components/votation/create-votation/create-votation.component';
import { VotationComponent } from './components/votation/votation.component';


// ATOMS
import { ImageContainerAtom } from './atoms/image-container/image-container.atom';

// MOLECULES
import { OptionCardComponent } from './molecules/option-card/option-card.component';
import { CreateOptionCardComponent } from './molecules/create-option-card/create-option-card.component';
import { ImageInputMolecule } from './molecules/image-input/image-input.molecule';

// PRIMENG MODULES
import {CheckboxModule} from 'primeng/checkbox';
import {ChartModule} from 'primeng/chart';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { VotationSettingsCardComponent } from './molecules/votation-settings-card/votation-settings-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    HeaderComponent,
    VotationCardComponent,
    CreateVotationComponent,
    VotationComponent,

    // ATOMS
    ImageContainerAtom,

    // MOLECULES
    OptionCardComponent,
    CreateOptionCardComponent,
    ImageInputMolecule,
    VotationSettingsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    CheckboxModule,
    InputTextareaModule,
    NgxDropzoneModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
