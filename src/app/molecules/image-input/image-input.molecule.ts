import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'molecule-image-input',
  templateUrl: './image-input.molecule.html',
  styleUrls: ['./image-input.molecule.css']
})
export class ImageInputMolecule implements OnInit {
  /*
    Is the component for allow and stylize image dropdowns

    PROPERTIES
    --------------------------------------------------------------------------------------------------------------
    | Name             | Default value      | Admitted values     | Description                                  |
    --------------------------------------------------------------------------------------------------------------
    | multiple         | false              | boolean             | Set if the dropdown can be used for save     |    
    |                  |                    |                     | multiple image files                         |
    --------------------------------------------------------------------------------------------------------------
    | inputStyle       | 'fill'             | 'fill'              | Is respect to the different styles can be    |
    |                  |                    |                     | used for the dropdown                        |
    --------------------------------------------------------------------------------------------------------------
    | message          | 'Subir imagen'     | string              | Is the message rendered when there are no    |
    |                  |                    |                     | uploaded image yet                           |
    --------------------------------------------------------------------------------------------------------------
    | imageFiles       | []                 | File[]              | [REQUIRED] Is the variable to bind with      |
    |                  |                    |                     | uploaded images                              |
    --------------------------------------------------------------------------------------------------------------
    |                  |                    |                     |                                              |
    --------------------------------------------------------------------------------------------------------------

    EVENTS
    -----------------------------------------------------------------------------------------------
    | Name                   | Parameters          | Description                                  |
    -----------------------------------------------------------------------------------------------
    | imageFilesChange       | settingValue        | Callback to invoke on image files changes.   |
    |                        |                     | Return the image files.                      |
    -----------------------------------------------------------------------------------------------
    |                        |                     |                                              |
    -----------------------------------------------------------------------------------------------

    USAGE EXAMPLES:
    
    ---------------------------------------------------------------------------------------------------------
      <molecule-image-input
        [multiple]="true"
        [message]="'Upload pictures'"
        (imageFilesChange)="onImageFilesEvent($event)"
      >
      </molecule-image-input>
    ---------------------------------------------------------------------------------------------------------
      <app-votation-settings-card
        [name]="'myInputRadioField'" [settingsValue]="'I'm selected'" [(selectedSettings)]="selectedObject"
      >
      </app-votation-settings-card>
    ---------------------------------------------------------------------------------------------------------
  */


  @Input('multiple') isMultiple:boolean=false;
  @Input('inputStyle') inputStyle:string='fill';
  @Input('message') message:string='Subir imagen';
  @Input('imageFiles') imageFiles:File[]=[];
  @Output() imageFilesChange=new EventEmitter();
  // public message!: string;

  title = 'dropzone';
  // files: File[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  onSelect(event: any) {
    if(!this.isMultiple){
      this.imageFiles=[];
    }

    const formData = new FormData();

    this.imageFiles.push(...event.addedFiles);
    for (var i = 0; i < this.imageFiles.length; i++) {
      formData.append('file[]', this.imageFiles[i]);
    }
    this.imageFilesChange.emit(this.imageFiles);
  }

  onRemove(event: any) {
    this.imageFiles.splice(this.imageFiles.indexOf(event), 1);
    this.imageFilesChange.emit(this.imageFiles);
  }
  onRemoveFirstOne() {
    this.imageFiles.splice(0, 1);
    this.imageFilesChange.emit(this.imageFiles);
  }

  
  customPreview(files: File[]) {
    // console.log("SIUUUU:", file);
    const file=files[0];
    var mimeType = file.type;
    if (mimeType.match('image/*') == null) {
      console.log("Image File not supprted")
      return;
    }
    this.read(file, (url: string | ArrayBuffer | null)=>this.setImgURL(url))
    
    
  }
  read(file:File, callback:any) {
    try{
      var reader = new FileReader();
    
      reader.onload = function() {
        callback(reader.result);
      }
    
      reader.readAsDataURL(file);

    } catch(e){
      throw e;
    }
  }
  setImgURL(url: string | ArrayBuffer | null){
    if(url)
      return url;
      // console.log(this.imgURL)
    return null;
  }
}