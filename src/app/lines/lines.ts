import { Request } from "../request/request";
import { Product } from "../product/product";

export class Lines {
    Id: number;
    PurchaseRequestId:number;
    PurchaseRequest: Request;
    Quantity: number;
    Price: number;
    ProductId:number;
    Product: Product;
}
