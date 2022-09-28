import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-votation',
  templateUrl: './create-votation.component.html',
  styleUrls: ['./create-votation.component.css'],
})
export class CreateVotationComponent implements OnInit {
  selectedSettings!: any;
  fileToUpload: File | null = null;

  constructor() {}

  ngOnInit(): void {}

  handleFileInput(files: File) {
    this.fileToUpload = files;
    console.log(this.fileToUpload);
  }

  existFiles: boolean = false;
  imageChangeEvent(files: File[]) {
    // console.log(files[0].stream)
    if (files.length > 0) {
      this.existFiles = true;
    } else {
      this.existFiles = false;
    }
  }

  testBinding(event: any) {
    // console.log("YEY: ", this.selectedSettings);
  }
}
