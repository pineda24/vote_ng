import { BaseModel } from "./baseModel.model";

export class PendingParticipants extends BaseModel {
    email!: String;
    id_votation!: String;
}