import { Client } from "./client";
import { Employee } from "./employee";
import { Toner } from "./toner";
import { PurchaseItem } from "./purchase-item";

export class TonerJob {    
    Id              :number        ;
    ClientId        :number        ;
    CollectedById   :number        ;
    DeliveredById   :number        ;
    Remarks         :string        ;
    OtherCharges    :number        ;
    Discount        :number        ;
    In              :Date          ;
    Out             :Date          ;
    Modified        :Date          ;
    Created         :Date          ;
    ClientName      :string        ;
    CollectedByName :string        ;
    DeliveredByName :string        ;
    Toners          :Toner[]       ;
    PurchasedItems  :PurchaseItem[];
    
    private NetTotal       :number;
    
    constructor(
        id              :number        ,
        clientId        :number        ,
        collectedById   :number        ,
        deliveredById   :number        ,
        remarks         :string        ,
        otherCharges    :number        ,
        discount        :number        ,
        inn              :Date         ,
        out             :Date          ,
        modified        :Date          ,
        created         :Date          ,
        clientName      :string        ,
        collectedByName :string        ,
        deliveredByName :string        ,
        toners          :Toner[]       ,
        purchaseItems   :PurchaseItem[]        
    ) {
        this.Id              = id              ;
        this.ClientId        = clientId        ;
        this.CollectedById   = collectedById   ;
        this.DeliveredById   = deliveredById   ;
        this.Remarks         = remarks         ;
        this.OtherCharges    = otherCharges    ;
        this.Discount        = discount        ;
        this.In              = inn             ;
        this.Out             = out             ;
        this.Modified        = modified        ;
        this.Created         = created         ;
        this.ClientName      = clientName      ;
        this.CollectedByName = collectedByName ;
        this.DeliveredByName = deliveredByName ;
        this.Toners          = toners          ;
        this.PurchasedItems   = purchaseItems   ;

    }

    updateAmount(target:number){
        let grossTotal=this.grossTotal();
        var diff = target - grossTotal;
        if (diff < 0){
            this.Discount = Math.abs(diff) / grossTotal;
        }            
        else{
            this.OtherCharges = diff;
        }
            
    }

    grossTotal(): number {
        return this.PurchasedItems.map(p=>p.StockItem.SellingPrice * p.StockItem.Quantity).reduce((t,s) => t+s) + this.OtherCharges;
    }

    netTotal(){        
        let grossTotal=this.grossTotal();
        return this.NetTotal= Math.ceil(grossTotal - (this.Discount * grossTotal));
    }
}