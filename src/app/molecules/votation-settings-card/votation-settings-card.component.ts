import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResultTypes } from 'src/app/models/resultTypes.model';

@Component({
  selector: 'app-votation-settings-card',
  templateUrl: './votation-settings-card.component.html',
  styleUrls: ['./votation-settings-card.component.css']
})
export class VotationSettingsCardComponent implements OnInit {
  /*
    Card used to render settings for configuration of a votation.

    PROPERTIES
    --------------------------------------------------------------------------------------------------------------
    | Name             | Default value      | Admitted values     | Description                                  |
    --------------------------------------------------------------------------------------------------------------
    | type             | 'radio'            | 'radio', 'checkbox' | Set the input type                           |
    --------------------------------------------------------------------------------------------------------------
    | name             | 'radioInput'       | string              | [RECOMENDED] Set the input name              |
    --------------------------------------------------------------------------------------------------------------
    | settingsValue    | undefined          | any                 | [REQUIRED] Is the value for selectedSettings |
    |                  |                    |                     | when the card is selected                    |
    --------------------------------------------------------------------------------------------------------------
    | selectedSettings | undefined          | any                 | [REQUIRED] Is the variable to bind the       |
    | [BINDING VALUE]  |                    |                     | selected card (or cards when the type value  |
    |                  |                    |                     | is 'checkbox').                              |
    --------------------------------------------------------------------------------------------------------------
    |                  |                    |                     |                                              |
    --------------------------------------------------------------------------------------------------------------

    EVENTS
    -----------------------------------------------------------------------------------------------
    | Name                   | Parameters          | Description                                  |
    -----------------------------------------------------------------------------------------------
    | selectedSettingsChange | settingValue        | Callback to invoke on settings card click.   |
    |                        |                     | Return the value of the selected card .      |
    -----------------------------------------------------------------------------------------------
    |                        |                     |                                              |
    -----------------------------------------------------------------------------------------------

    USAGE EXAMPLES:
    
    ---------------------------------------------------------------------------------------------------------
      <app-votation-settings-card
        [type]="checkbox" [name]="'myInputCheckboxField'"
        [settingsValue]="mySettingsValueExample" [(selectedSettings)]="selectedSettingsList"
        (selectedSettingsChange)="onChange($event)"
      >
      </app-votation-settings-card>
    ---------------------------------------------------------------------------------------------------------
      <app-votation-settings-card
        [name]="'myInputRadioField'" [settingsValue]="'I'm selected'" [(selectedSettings)]="selectedObject"
      >
      </app-votation-settings-card>
    ---------------------------------------------------------------------------------------------------------
  */

  @Input('type') type:string='radio';
  @Input('name') name:string='radioInput';
  @Input('settingsValue') settingsValue:any=undefined;
  @Input('selectedSettings') selectedSettings:any=undefined;
  @Input('resultType') resultType:ResultTypes = new ResultTypes();
  @Output('selectedSettingsChange') selectedSettingsChange=new EventEmitter<any>();
  isSelected=false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(){
    // console.log('HOLA :)')
    this.selectedSettings=this.settingsValue;
    this.selectedSettingsChange.emit(this.selectedSettings);
  }
}
