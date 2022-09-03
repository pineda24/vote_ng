import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('userLoged') userLoged:boolean=false; 

  isFirstActive:boolean=true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    /* this.route.queryParams.subscribe(params=>{
      this.
    }) */
  }

  ngOnInit(): void {
  }

  navigate(
    button:number//1 for Administration button, 2 for My participations button
  ){
    this.isFirstActive=!this.isFirstActive;
    console.log(this.isFirstActive)
    if(button==1){
      // this.router.navigate(["my-votations"])
    }else if(button==2){
      console.log("navigation")
      // this.router.navigate(["home"])
    }
  }
}
