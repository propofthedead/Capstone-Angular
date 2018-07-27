import { User } from "@user/user";
import { Lines } from "../lines/lines";

export class Request {
    Id:number;
    Description:string;
    Justification:string;
    RejectReason:string;
    DeliviryMode:string;
    Status:string;
    Price:number;
    User: User;
    UserId: number;
    Lines: Lines[];
}
