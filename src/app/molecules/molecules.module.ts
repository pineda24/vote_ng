import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageInputMolecule } from './image-input/image-input.molecule';
import { CreateOptionCardComponent } from './create-option-card/create-option-card.component';
import { OptionCardComponent } from './option-card/option-card.component';
import { VotationCard } from '../models/votation.model';
import { VotationSettingsCardComponent } from './votation-settings-card/votation-settings-card.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { AtomsModule } from '../atoms/atoms.module';



@NgModule({
  declarations: [
    ImageInputMolecule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxDropzoneModule,
    AtomsModule,
  ],
  exports: [
    ImageInputMolecule,
  ]
})
export class MoleculesModule { }
