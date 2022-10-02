import { HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Votations } from 'src/app/models/ votations.model';
import { ResultTypes } from 'src/app/models/resultTypes.model';
import { VotationOptions } from 'src/app/models/votationOptions.model';
import { DataService } from 'src/app/services/data.service';
import { IterableService } from 'src/app/services/iterable.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-create-votation',
  templateUrl: './create-votation.component.html',
  styleUrls: ['./create-votation.component.css'],
})
export class CreateVotationComponent implements OnInit {
  selectedSettings!: any;
  fileToUpload: File[] = [];
  imgURLs: any[] = [];
  resultTypes: Array<ResultTypes> = [];
  votations: Votations = new Votations();
  firstVotationOption: VotationOptions=new VotationOptions("0");
  votationOptionsList: VotationOptions[]=[];
  fileInput: ElementRef | undefined;

  constructor(
    private data: DataService,
    private iterable: IterableService,
  ) {}

  ngOnInit(): void {
    this.getResultTypes();
  }

  addVotationOptionEvent(){
    const newVotationOption=new VotationOptions(`${this.votationOptionsList.length+1}`)
    this.votationOptionsList.push(newVotationOption);
  }

  removeVotationOptionEvent(event:any, index?:number){
    // console.log(event, index);
    if(index){
      this.votationOptionsList.splice(index,1);
    }else if(event instanceof VotationOptions) {
      this.votationOptionsList.splice(
        this.votationOptionsList.indexOf(event), 1
      );
    }
  }

  selectedSettingsChangeEvent(event: any) {
    // console.log("YEY: ", this.selectedSettings);
  }

  handleFileInput(files: File[]) {
    this.fileToUpload = files;
  }

  existFiles: boolean = false;
  imageChangeEvent(files: File[]) {
    if (files.length > 0) {
      this.existFiles = true;
    } else {
      this.existFiles = false;
    }
  }

  async getResultTypes() {
    await this.data.findByParams('/results-types', '').subscribe((res) => {
      res.forEach((element: ResultTypes) => {
        this.resultTypes.push(element);
      });
      console.log("RESULT TYPES?:", this.resultTypes);
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

    const file: File = this.fileToUpload?.[0];
    var formData: any = new FormData();
    formData.append('file', file);

    await this.data.findByFilter('/images/upload', formData).subscribe(async (res) => {
      console.log(res);
      this.votations.photo = res?.url;
      await this.data.findByFilter('/votations', this.votations).subscribe((res) => {
        console.log(res);
      });
    });
    
  }
}
