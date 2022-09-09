import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-votation',
  templateUrl: './create-votation.component.html',
  styleUrls: ['./create-votation.component.css']
})
export class CreateVotationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  existFiles: boolean = false;
  imageChangeEvent(files: File[]) {
    if (files.length > 0) {
      this.existFiles = true;
    } else {
      this.existFiles = false;
    }
  }
}
