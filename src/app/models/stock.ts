export class StockItem{
  
    Id           : number ;
    Name         : string ;
    SellingPrice : number ;
    CostPrice    : number ;
    Quantity     : number ;

    constructor(
        id           : number=null,
        name         : string=null,
        sellingPrice : number=null,
        costPrice    : number=null,
        quantity     : number=null

    ){
        this.Id           =id          ;
        this.Name         =name        ;
        this.SellingPrice =sellingPrice;
        this.CostPrice    =costPrice   ;
        this.Quantity     =quantity    ;
    }

    copy(): any {
        return new StockItem(
            this.Id           ,
            this.Name         ,
            this.SellingPrice ,
            this.CostPrice    ,
            this.Quantity     
        );
      }

    update(edit:StockItem){
            this.Id           =edit.Id           ;
            this.Name         =edit.Name         ;
            this.SellingPrice =edit.SellingPrice ;
            this.CostPrice    =edit.CostPrice    ;
            this.Quantity     =edit.Quantity     ;
    }
}