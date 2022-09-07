import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VotationOption } from 'src/app/models/votation.model';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.css']
})
export class OptionCardComponent implements OnInit {
  @Input('optionObject') optionObject:VotationOption=new VotationOption();
  @Input('maxOptions') maxOptions!:number;
  @Input('selectedOptions') selectedOptions:VotationOption[]=[];
  @Output() selectedOptionsChange = new EventEmitter<VotationOption[]>();

  isSelected=false;
  static optionsLimitReached=false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleDisplayDescription(optionDescription: HTMLDivElement) {
    console.log(optionDescription);
    optionDescription.classList.toggle('display-cutted');
  }
  changeOption() {
    
    if (this.selectedOptions.length > this.maxOptions) {
      this.selectedOptions.pop();
    }

    this.isSelected=!this.isSelected;
    this.selectedOptionsChange.emit(this.selectedOptions);
  }
}
