export class Vendor {
    Id:number;
    Name:string;
    Address:string;
    City:string;
    Code:string;
    Email:string;
    Phone:string;
    State:string;
    Zipcode:string;
    IsPreApproved:boolean;
    Active:boolean;

    constructor(){
    this.Active=true;
    this.IsPreApproved=false;
    this.Id=0;
    }
}

