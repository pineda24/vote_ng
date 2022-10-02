import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { VotationOptions } from 'src/app/models/votationOptions.model';

@Component({
  selector: 'app-button-append-option-card',
  templateUrl: './button-append-option-card.component.html',
  styleUrls: ['./button-append-option-card.component.css']
})
export class ButtonAppendOptionCardComponent implements OnInit {
  @Output('addEvent') addEvent:EventEmitter<any>=new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  }

  onAddEvent(){
    this.addEvent.emit();
  }

}
