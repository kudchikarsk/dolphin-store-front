export class Toner{
    ClientId:number;
    Id:number;
    Name:string;
    constructor(
        id:number=0, 
        clientId:number=0, 
        name:string=null)
    {
        this.Id=id;
        this.ClientId=clientId;
        this.Name=name;
    }

    copy(): Toner{
        return new Toner(
            this.Id,
            this.ClientId,
            this.Name);
    }

    update(edit:Toner):void {
        this.Id=edit.Id;
        this.ClientId=edit.ClientId;
        this.Name=edit.Name;
    }
}