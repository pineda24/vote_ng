import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageContainerAtom} from './image-container/image-container.atom'
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ImageContainerAtom
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextareaModule,
  ],
  exports:[
    ImageContainerAtom,
    FormsModule,
    InputTextareaModule,
  ]
})
export class AtomsModule { }
