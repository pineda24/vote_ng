import { BaseModel } from "./baseModel.model";

export class Votations extends BaseModel {
    name!: string;
    description!: String;
    photo!: String;
    max_vote_options!: number;
    is_public!: boolean;
    result_type!: String;
    create_by!: String;
    create_date!: Date;
}