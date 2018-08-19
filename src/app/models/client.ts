export class Client{
    Id:number;
    Name:string;
    Address:string;
    Mobile:string;
    Email:string;

    constructor(name:string=null){
        this.Name=name;
    }
}