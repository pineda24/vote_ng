import { Component, Input, OnInit } from '@angular/core';
import { Votation } from 'src/app/models/votation.model';

@Component({
  selector: 'app-votation',
  templateUrl: './votation.component.html',
  styleUrls: ['./votation.component.css']
})
export class VotationComponent implements OnInit {
  @Input("votationObject") votationObject:Votation=new Votation();

  constructor() { }

  ngOnInit(): void {
  }

}
