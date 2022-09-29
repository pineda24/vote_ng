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

  async saveVotation(){
    // name: string;
    // description: String;
    // photo: String;
    // max_vote_options: number;
    // is_public: boolean;
    // result_type: String;
    // create_by: String;
    // create_date: Date;
    
    this.votations.max_vote_options = 4;
    this.votations.is_public = true;
    this.votations.result_type = 'f6ac419a-6847-4332-8e16-92123643cd66'
    this.votations.create_by = '741a3044-061a-44c8-a2e8-7f5b27a66efd'
    this.votations.create_date = new Date()

    let data = {
      'image': this.fileToUpload,
      'votations': this.votations
    }

    // await this.data.findByFilter('/votations', data).subscribe((res) => {
    //   console.log(res);
    // });

    await this.data.findByFilter('/images/upload', this.fileToUpload).subscribe((res) => {
      console.log(res);
    });
  }
}
