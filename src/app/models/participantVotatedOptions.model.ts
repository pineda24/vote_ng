import { BaseModel } from "./baseModel.model";

export class ParticipantVotatedOptions extends BaseModel {
    id_user!: String;
    id_votated!: String;
    voted_date!: Date;
}