import { BaseModel } from "./baseModel.model";

export class UsersSignup extends BaseModel {
    email: string = "";
    password: string = "";
    confPassword: string = "";
}