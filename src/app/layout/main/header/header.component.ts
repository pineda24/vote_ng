import { Component, OnInit, ElementRef, ViewChild, HostListener, ViewChildren, AfterViewInit } from "@angular/core";
import { Router } from '@angular/router';
// import * as $ from 'jquery';  
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  awaitingNotifications: any[] = [];

  showNotificacions: boolean = false;
  showUserInfo: boolean = false;
  @ViewChild('sidebar') sidebar!:ElementRef;
  @ViewChildren('tooltip') tooltips!:ElementRef[];

  currentUser:any={};

  style = "transform: translate3d(-135px, 32px, 0px)";
  sidebarClasses={
    "sidebar": true,
    "open": false,
  }
  toogleClasses={
    "bi": true,
    "bi-list": true,
    "bi-list-nested": false,
    "visibility": true,
  }

  constructor(
    // public securityService: SecurityService, 
    // public data: DataService,
    private router: Router
    ) {}

  async ngOnInit() {
    // this.currentUser = await this.securityService.getCurrentUser();
  }


  onLogout() {
    // this.securityService.logout().subscribe(() =>{
    //   this.router.navigate(['/login']);
    // });
  }

  toogleBtnChange() {
    if (this.sidebarClasses.open==true) {
      this.toogleClasses["bi-list"]=false, this.toogleClasses["bi-list-nested"]=true;
    } else {
      this.toogleClasses["bi-list"]=true, this.toogleClasses["bi-list-nested"]=false;
    }
    return true;
  }

  clickOnToogleBtn():void{
    // console.log("Click en toogle button")
    this.sidebarClasses.open=!this.sidebarClasses.open;
    this.toogleBtnChange(); //calling the function(optional)
  }

  // breakOverflow(elm:JQuery<any>) {
  //   if(elm!=undefined){
  //     var top = elm.offset()!.top;
  //     var left = elm.offset()!.left;
  //     elm.appendTo(this.sidebar.nativeElement);
  //     elm.css({
  //       position: 'absolute',
  //       left: left+'px',
  //       top: top+'px',
  //       bottom: 'auto',
  //       right: 'auto',
  //       'z-index': 10000
  //     });
  //   }
  // }
  
  ngAfterViewInit(){
    // console.log("HOLA", this.tooltips)
    this.tooltips.forEach((tooltip)=>{
      console.log(tooltip)
      // this.breakOverflow($(tooltip.nativeElement));
    })
  }
}
