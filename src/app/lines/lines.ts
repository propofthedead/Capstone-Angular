import { Request } from "../request/request";

export class Lines {
    Id: number;
    PurchaseRequestId:number;
    PurchaseRequest: Request;
    Quantity: number;
    Price: number;
}
