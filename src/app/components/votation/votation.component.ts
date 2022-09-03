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
  limitReached:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleDisplayDescription(optionDescription: HTMLDivElement){
    console.log(optionDescription)
    optionDescription.classList.toggle('display-cutted');
  }

  changeOption(index:number){
    if(this.selectedOptions.length>=this.votationObject.maxOptions){
      this.limitReached=true;
      if(this.selectedOptions.length>this.votationObject.maxOptions){
        this.selectedOptions.pop();
        return;
      }
    }else if(this.selectedOptions.length<this.votationObject.maxOptions){
      this.limitReached=false;
    }

    // console.log(this.selectedOptions)
    this.votationObject.optionsList[index].selected=!this.votationObject.optionsList[index].selected;
  }
}
