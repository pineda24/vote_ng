import { BaseModel } from "./baseModel.model";

export class UsersLogIn extends BaseModel {
    user_name: String = "";
    password: String = "";
}