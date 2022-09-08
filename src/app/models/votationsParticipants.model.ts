import { BaseModel } from "./baseModel.model";

export class VotationsParticipants extends BaseModel {
    id_user!: String;
    id_votation!: String;
}