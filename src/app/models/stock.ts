export class StockItem implements IStockItem{
  
    Id           : number ;
    Name         : string ;
    SellingPrice : number ;
    CostPrice    : number ;
    Quantity     : number ;

    constructor(stockItem:IStockItem=null){
        if(stockItem!=null) {
            this.Id           =stockItem.Id           ;
            this.Name         =stockItem.Name         ;
            this.SellingPrice =stockItem.SellingPrice ;
            this.CostPrice    =stockItem.CostPrice    ;
            this.Quantity     =stockItem.Quantity     ;
        }
    }

    update(edit:IStockItem){
            this.Id           =edit.Id           ;
            this.Name         =edit.Name         ;
            this.SellingPrice =edit.SellingPrice ;
            this.CostPrice    =edit.CostPrice    ;
            this.Quantity     =edit.Quantity     ;
    }
}

export interface IStockItem{
    Id           : number ;
    Name         : string ;
    SellingPrice : number ;
    CostPrice    : number ;
    Quantity     : number ;
}