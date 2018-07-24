export class User{
    Id: number;
    Username: string;
    Password: string;
    Firstname: string;
    Lastname: string;
    Phone: string;
    Email: string;
    IsReviewer:boolean;
    IsAdmin: boolean;
    Active: boolean;

    constructor(){
        this.Id=0;
        this.IsReviewer=false;
        this.IsAdmin=false;
        this.Active=true;
    }
}