import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VotationOptions } from 'src/app/models/votationOptions.model';

@Component({
  selector: 'app-create-option-card',
  templateUrl: './create-option-card.component.html',
  styleUrls: ['./create-option-card.component.css']
})
export class CreateOptionCardComponent implements OnInit {
  @Input('optionObject') optionObject:VotationOptions=new VotationOptions();
  @Input('isRemovable') isRemovable:boolean=true;
  @Output('onRemoveEvent') onRemoveEvent:EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onRemove(){
    this.onRemoveEvent.emit(this.optionObject);
  }

}
