import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  display: boolean = false;
  displayInfo: boolean = false;
  statusCase!: number;
  // readonly accountStatus: any = AccountStatus;

  constructor(public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.statusCase = this.config.data.case;
  }

  displayInformation() {
    this.displayInfo = !this.displayInfo;
  }

}
