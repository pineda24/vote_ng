import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotationComponent } from './votation.component';
import { ButtonAppendOptionCardComponent } from './create-votation/button-append-option-card/button-append-option-card.component';
import { CreateVotationComponent } from './create-votation/create-votation.component';
import { CreateOptionCardComponent } from 'src/app/molecules/create-option-card/create-option-card.component';
import { OptionCardComponent } from 'src/app/molecules/option-card/option-card.component';
import { VotationSettingsCardComponent } from 'src/app/molecules/votation-settings-card/votation-settings-card.component';

import { AtomsModule } from 'src/app/atoms/atoms.module';
import { MoleculesModule } from 'src/app/molecules/molecules.module';
import { CheckboxModule } from 'primeng/checkbox';
import { ChartModule } from 'primeng/chart';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { VotationCardComponent } from 'src/app/molecules/votation-card/votation-card.component';

@NgModule({
  declarations: [
    VotationComponent,
    VotationCardComponent,
    CreateVotationComponent,
    ButtonAppendOptionCardComponent,
    OptionCardComponent,
    CreateOptionCardComponent,
    VotationSettingsCardComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    AtomsModule,
    MoleculesModule,
    CheckboxModule,
    ChartModule,
  ],
  exports: [
    VotationComponent,
    VotationCardComponent,
    CreateVotationComponent,
    ButtonAppendOptionCardComponent,
    OptionCardComponent,
    CreateOptionCardComponent,
    VotationSettingsCardComponent,
  ],
})
export class VotationModule {}
