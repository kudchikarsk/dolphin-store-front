import { Client } from "./client";
import { Employee } from "./employee";
import { Toner } from "./toner";
import { PurchaseItem } from "./purchase-item";
import { iif } from "rxjs";

export class TonerJob implements ITonerJob {
        
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
    
    constructor(tonerJob:ITonerJob=null) {
        if(tonerJob!=null) {
            this.Id              = tonerJob.Id               ;
            this.ClientId        = tonerJob.ClientId         ;
            this.CollectedById   = tonerJob.CollectedById    ;
            this.DeliveredById   = tonerJob.DeliveredById    ;
            this.Remarks         = tonerJob.Remarks          ;
            this.OtherCharges    = tonerJob.OtherCharges     ;
            this.Discount        = tonerJob.Discount         ;
            this.In              = tonerJob.In               ;
            this.Out             = tonerJob.Out              ;
            this.Modified        = tonerJob.Modified         ;
            this.Created         = tonerJob.Created          ;
            this.ClientName      = tonerJob.ClientName       ;
            this.CollectedByName = tonerJob.CollectedByName  ;
            this.DeliveredByName = tonerJob.DeliveredByName  ;
            this.Toners          = tonerJob.Toners           ;
            this.PurchasedItems  = tonerJob.PurchasedItems   ;
        }
        else{
            this.Toners=[];
            this.PurchasedItems=[];
        }
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

export interface ITonerJob
{
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
}