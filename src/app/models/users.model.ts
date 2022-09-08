import { BaseModel } from "./baseModel.model";

export class Users extends BaseModel {
    user_name!: String;
    photo!: String;
    email!: String;
    hash!: String;
    color!: String;
}