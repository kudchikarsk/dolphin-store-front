import { StockItem } from "./stock";

export class PurchaseItem{
    Id         :number   ;    
    Quantity   :number   ;
    StockItem  :StockItem;

    constructor(
        id         :number   =0,
        quantity   :number   =null,
        stockItem  :StockItem=null

    ){
        this.Id         =id         ;
        this.Quantity   =quantity   ;
        this.StockItem  =stockItem  ;
    }

    copy():PurchaseItem{
        return new PurchaseItem(
            this.Id         ,
            this.Quantity   ,
            this.StockItem  
        );
    }

    update(edit:PurchaseItem){
        this.Id         = edit.Id         ;
        this.Quantity   = edit.Quantity   ;
        this.StockItem  = edit.StockItem  ;
    }
}