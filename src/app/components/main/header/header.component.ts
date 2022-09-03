import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('userLoged') userLoged:boolean=false; 

  isFirstActive:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  navigate(){
    this.isFirstActive=!this.isFirstActive;
    console.log(this.isFirstActive)
  }
}
