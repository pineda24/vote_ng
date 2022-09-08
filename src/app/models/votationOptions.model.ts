import { BaseModel } from "./baseModel.model";

export class VotationOptions extends BaseModel {
    id_votation!: String;
    name!: String;
    description!: String;
    photo!: String;
    color!: String;
}