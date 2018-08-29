export class Toner implements IToner {
    
    ClientId:number;
    Id:number;
    Name:string;
    Selected: boolean;

    constructor(toner:IToner=null)
    {
        if(toner!=null) {
            this.Id=toner.Id;
            this.ClientId=toner.ClientId;
            this.Name=toner.Name;
        }
    }

    update(toner:IToner):void {
        this.Id=toner.Id;
        this.ClientId=toner.ClientId;
        this.Name=toner.Name;
    }
}

export interface IToner
{
    ClientId:number;
    Id:number;
    Name:string;
}