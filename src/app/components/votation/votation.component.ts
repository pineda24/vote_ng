import { Component, ElementRef, Input, OnInit, ViewChildren } from '@angular/core';
import { Votation, VotationOption } from 'src/app/models/votation.model';

@Component({
  selector: 'app-votation',
  templateUrl: './votation.component.html',
  styleUrls: ['./votation.component.css']
})
export class VotationComponent implements OnInit {
  @Input("votationObject") votationObject:Votation=new Votation();
  selectedOptions!:VotationOption[];
  @ViewChildren("optionDescription") optionDescriptions!:HTMLDivElement[];

  constructor() { }

  ngOnInit(): void {
  }

  toogleDisplayDescription(optionDescription: HTMLDivElement){
    console.log(optionDescription)
    optionDescription.classList.toggle('display-cutted');
  }
}
