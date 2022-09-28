import { Component, OnInit } from '@angular/core';
import { Votations } from 'src/app/models/ votations.model';
import { ResultTypes } from 'src/app/models/resultTypes.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-votation',
  templateUrl: './create-votation.component.html',
  styleUrls: ['./create-votation.component.css'],
})
export class CreateVotationComponent implements OnInit {
  selectedSettings!: any;
  fileToUpload: File | null = null;
  resultTypes: Array<ResultTypes> = [];
  votations: Votations = new Votations();

  constructor(
    private data: DataService,
  ) {}

  ngOnInit(): void {
    this.getResultTypes();
  }

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

  async getResultTypes() {
    await this.data.findByParams('/results-types', '').subscribe((res) => {
      res.forEach((element: ResultTypes) => {
        this.resultTypes.push(element);
      });
    });
  }
}
