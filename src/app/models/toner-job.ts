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
    
    constructor(
        id              :number         =null,
        clientId        :number         =null,
        collectedById   :number         =null,
        deliveredById   :number         =null,
        remarks         :string         =null,
        otherCharges    :number         =null,
        discount        :number         =null,
        inn              :Date          =null,
        out             :Date           =null,
        modified        :Date           =null,
        created         :Date           =null,
        clientName      :string         =null,
        collectedByName :string         =null,
        deliveredByName :string         =null,
        toners          :Toner[]        =[],
        purchaseItems   :PurchaseItem[] =[]        
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
        this.PurchasedItems   = purchaseItems  ;
    }

    updateAmount(target:number){
        this.Discount=0;
        this.OtherCharges=0;
        let grossTotal=this.grossTotal();
        var diff = target - grossTotal;
        if (diff < 0){
            this.Discount = Math.abs(diff) / grossTotal;
        }            
        else{
            this.OtherCharges = diff;
        }
            
    }

    updateClient(client: Client): void {    
        this.ClientId=client.Id;
        this.ClientName=client.Name;
    }

    updateCollectedBy(employee: Employee): void {
        this.CollectedById=employee.Id;
        this.CollectedByName=employee.Name;
    }

    updateDeliveredBy(employee: Employee): void {
        this.DeliveredById=employee.Id;
        this.DeliveredByName=employee.Name;
    }

    grossTotal(): number {
        if(this.PurchasedItems==null || this.PurchasedItems==undefined) return this.OtherCharges;
        return this.PurchasedItems.map(p=>p.StockItem.SellingPrice * p.StockItem.Quantity).reduce((t,s) => t+s) + this.OtherCharges;
    }

    netTotal(): number {        
        let grossTotal=this.grossTotal();
        return Math.ceil(grossTotal - (this.Discount * grossTotal));
    }
}