import { BaseModel } from "./baseModel.model";

export class VotationOptions extends BaseModel {
    constructor(id?:String){
        super();
        if(id){
            this.id=id;
        }
    }
    id_votation!: String;
    name!: String;
    description!: String;
    photo!: String;
    color!: String;
}