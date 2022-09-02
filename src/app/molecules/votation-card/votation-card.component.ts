import { Component, Input, OnInit } from '@angular/core';
import { VotationCard } from 'src/app/models/Votation.model';

@Component({
  selector: 'app-votation-card',
  templateUrl: './votation-card.component.html',
  styleUrls: ['./votation-card.component.css']
})
export class VotationCardComponent implements OnInit {
  @Input('idRender') idRender!:any;
  @Input('votationObject') votationObject:VotationCard=new VotationCard();
  constructor() { }

  ngOnInit(): void {
  }

}