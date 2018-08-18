export class Stock{
    Id               : number;
    Name             :string ;
    TonerPartId      : number;
    UnitSellingPrice : number;
    UnitPrice        : number;
    Quantity         : number;
}

export class TonerPart{
    Id: number;
    Name: string;
    PartTypeId:number;
}

export class PartType{
    Id: number;
    Name: string;
}