import { HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Votations } from 'src/app/models/ votations.model';
import { ResultTypes } from 'src/app/models/resultTypes.model';
import { DataService } from 'src/app/services/data.service';

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

  // @ViewChild(‘fileInput’, { static: false })
 fileInput: ElementRef | undefined;

  constructor(
    private data: DataService,
  ) {}

  ngOnInit(): void {
    this.getResultTypes();
  }

  handleFileInput(files: File[]) {
    this.fileToUpload = files;
    this.getImgURLs();
    // console.log(this.fileToUpload[0]);
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

    let data = {
      'image': this.fileToUpload[0],
      'votations': this.votations
    }

    // await this.data.findByFilter('/votations', data).subscribe((res) => {
    //   console.log(res);
    // });
    const file: File = this.fileToUpload?.[0];
    var formData: any = new FormData();
    formData.append('file', file);

    await this.data.findByFilter('/images/upload', formData).subscribe((res) => {
      console.log(res);
    });
    
  }

  // async attachFile(event: any) {
  //   const file: File = event.target.files?.[0];
  //   console.log(file)
  //   var formData: any = new FormData();
  //   formData.append('file', file);
  //   await this.data.fileSend('/images/upload', formData).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
  
  
  getImgURLs() {
    if (this.fileToUpload.length === 0){
      console.log("LENGHT < 0")
      return;
    }
    this.imgURLs=[];
    for(let i=0; i<this.fileToUpload.length; i++){
      // console.log(this.files[i].type)
      var mimeType = this.fileToUpload[i].type;
      console.log("MIME TYPE: ", mimeType)
      /* if (mimeType == null) {
        // this.message = "Only images are supported.";
        console.log("IS NOT AN IMAGE");
        return;
      } */
      this.read(this.fileToUpload[i], (url: string | ArrayBuffer | null)=>this.addImgURL(url))
    }
  }
  read(file:File, callback:any) {
    var file = file;
    var reader = new FileReader();
  
    reader.onload = function() {
      callback(reader.result);
    }
  
    reader.readAsDataURL(file);
  }
  addImgURL(url: string | ArrayBuffer | null){
    if(url){
      this.imgURLs.push(url)
      console.log(this.imgURLs)
    }
  } 
}
