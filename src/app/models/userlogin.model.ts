import { BaseModel } from "./baseModel.model";

export class UsersLogIn extends BaseModel {
    email: string = "";
    password: string = "";
}